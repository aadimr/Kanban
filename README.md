# Project Title
Kanban Board
# Description
This is a simple implementation of a Kanban Board, a tool that helps visualize and manage work. Originally it was first created in Toyota automotive, but nowadays it's widely used in software development.

A Kanban Board is usually made of 3 columns - But in this Kanban Board user can create multiple list and inside list they can create multiple task also.
# Getting Started
# Dependencies
* react-router-dom
* reactjs/toolkit
* react-redux
* redux-persist
* react-icons
* react-quill
* react-toastify
* react-beautiful-dnd
* Material UI
* nanoid

# Authors
Contributors names
* Adarsh kushwaha
* Aditya Shaw
* Vaidehi Ramilla
* Vikrant Kumar


# Deployment Link 
* https://kanban-board-y2a1.onrender.com

## Data Structure 


```json
{
  "KanBan": {
    "list": [
      {
        "id": "nanoId()",
        "title": "Todo",
        "task": [
          {
            "id": "nanoId()",
            "title": " ",
            "listId": " "
          },
          {
            "id": "nanoId()",
            "title": " ",
            "listId": " "
          }
        ]
      },
      {
        "id": "nanoId()",
        "title": "Doing",
        "task": [
          {
            "id": "nanoId()",
            "title": " ",
            "listId": " "
          }
        ]
      },
      {
        "id": "nanoId()",
        "title": "complete",
        "task": [
          {
            "id": "nonoId()",
            "title": " ",
            "listId": " "
          }
        ]
      }
    ]
  }
}





