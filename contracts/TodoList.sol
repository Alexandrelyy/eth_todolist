pragma solidity ^0.5.0;

contract TodoList {
    uint public taskCount = 0; // state variable
    
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;

    constructor() public 
    {
        CreateTask("Hello World");
    }
    
    function CreateTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }
}

//abi = abstract binary interface