from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from collections import defaultdict, deque
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# ----------------------------
# Enable CORS (important for frontend)
# ----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------------
# Root Test Endpoint
# ----------------------------
@app.get("/")
def read_root():
    return {"Ping": "Pong"}


# ----------------------------
# Data Models
# ----------------------------
class Node(BaseModel):
    id: str


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


# ----------------------------
# DAG Check Logic (Kahn's Algorithm)
# ----------------------------
def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    graph = defaultdict(list)
    indegree = defaultdict(int)

    # Initialize indegree for all nodes
    for node in nodes:
        indegree[node.id] = 0

    # Build graph + indegree count
    for edge in edges:
        graph[edge.source].append(edge.target)
        indegree[edge.target] += 1

    # Collect nodes with indegree 0
    queue = deque([node.id for node in nodes if indegree[node.id] == 0])

    visited_count = 0

    while queue:
        current = queue.popleft()
        visited_count += 1

        for neighbor in graph[current]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return visited_count == len(nodes)


# ----------------------------
# Main Assignment Endpoint
# ----------------------------
@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # 🚫 Handle empty pipeline explicitly
    if num_nodes == 0:
        return {
            "num_nodes": 0,
            "num_edges": 0,
            "is_dag": False,
            "status": "empty",
            "message": "Pipeline contains no nodes."
        }

    dag_result = is_dag(nodes, edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag_result,
        "status": "valid" if dag_result else "cycle",
        "message": (
            "Pipeline is a valid DAG."
            if dag_result
            else "Pipeline contains circular dependencies."
        ),
    }