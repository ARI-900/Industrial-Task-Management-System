export const employees = [
  {
    id: 1,
    name: "Ananya Sharma",
    email: "ananya.sharma@gmail.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        title: "Update employee handbook",
        description: "Revise the handbook with the new policies.",
        category: "HR",
        taskDate: "2025-04-10",
        deadline: "2025-04-15",
        newTask: true,
        active: false,
        failed: false,
        completed: false,
        adminId: 1,
        priority: "High"
      },
      {
        title: "Team meeting",
        description: "Monthly check-in with team members.",
        category: "Management",
        taskDate: "2025-04-05",
        deadline: "2025-04-20",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 1,
        priority: "Medium"
      },
      {
        title: "Create onboarding slides",
        description: "Prepare slides for new employee orientation.",
        category: "Training",
        taskDate: "2025-04-02",
        deadline: "2025-04-04",
        newTask: false,
        active: true,
        failed: true,
        completed: false,
        adminId: 1,
        priority: "Low"
      }
    ]
  },
  {
    id: 2,
    name: "Rahul Verma",
    email: "rahul.verma@gmail.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        title: "Fix login issue",
        description: "Investigate login bug on the website.",
        category: "Development",
        taskDate: "2025-04-11",
        deadline: "2025-04-14",
        newTask: true,
        active: false,
        failed: false,
        completed: false,
        adminId: 1,
        priority: "High"
      },
      {
        title: "Code review",
        description: "Review code for the new dashboard module.",
        category: "Development",
        taskDate: "2025-04-08",
        deadline: "2025-04-18",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 1,
        priority: "Medium"
      },
      {
        title: "Write unit tests",
        description: "Add unit tests to user authentication.",
        category: "Testing",
        taskDate: "2025-04-06",
        deadline: "2025-04-19",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 1,
        priority: "Medium"
      },
      {
        title: "Deploy updates",
        description: "Deploy April release to production.",
        category: "DevOps",
        taskDate: "2025-04-01",
        deadline: "2025-04-02",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 1,
        priority: "Low"
      }
    ]
  },
  {
    id: 3,
    name: "Amitabh Desai",
    email: "amitabh.desai@gmail.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        title: "Client feedback analysis",
        description: "Analyze feedback from last month’s survey.",
        category: "Marketing",
        taskDate: "2025-04-09",
        deadline: "2025-04-13",
        newTask: true,
        active: false,
        failed: false,
        completed: false,
        adminId: 1,
        priority: "High"
      },
      {
        title: "Social media calendar",
        description: "Plan posts for the next two weeks.",
        category: "Marketing",
        taskDate: "2025-04-05",
        deadline: "2025-04-17",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 2,
        priority: "Medium"
      },
      {
        title: "Campaign ideas",
        description: "Brainstorm ideas for summer campaign.",
        category: "Marketing",
        taskDate: "2025-04-03",
        deadline: "2025-04-06",
        newTask: false,
        active: true,
        failed: true,
        completed: false,
        adminId: 1,
        priority: "Low"
      }
    ]
  },
  {
    id: 4,
    name: "Priya Raj Chowdhury",
    email: "priya.chowdhury@gmail.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        title: "Vendor communication",
        description: "Negotiate pricing with suppliers.",
        category: "Operations",
        taskDate: "2025-04-11",
        deadline: "2025-04-16",
        newTask: true,
        active: false,
        failed: false,
        completed: false,
        adminId: 2,
        priority: "High"
      },
      {
        title: "Inventory check",
        description: "Verify April stock levels.",
        category: "Inventory",
        taskDate: "2025-04-04",
        deadline: "2025-04-06",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 1,
        priority: "Low"
      },
      {
        title: "Order office supplies",
        description: "Place order for printer ink and paper.",
        category: "Office",
        taskDate: "2025-04-06",
        deadline: "2025-04-10",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 2,
        priority: "Low"
      },
      {
        title: "Internal audit prep",
        description: "Prepare documents for quarterly audit.",
        category: "Finance",
        taskDate: "2025-04-01",
        deadline: "2025-04-09",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 1,
        priority: "Medium"
      },
      {
        title: "Check delivery issues",
        description: "Look into late shipment cases.",
        category: "Logistics",
        taskDate: "2025-04-07",
        deadline: "2025-04-14",
        newTask: false,
        active: true,
        failed: true,
        completed: false,
        adminId: 2,
        priority: "Medium"
      }
    ]
  },
  {
    id: 5,
    name: "Karan Mehta",
    email: "karan.mehta@gmail.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        title: "Risk assessment",
        description: "Evaluate security vulnerabilities.",
        category: "Security",
        taskDate: "2025-04-12",
        deadline: "2025-04-18",
        newTask: true,
        active: false,
        failed: false,
        completed: false,
        adminId: 1,
        priority: "High"
      },
      {
        title: "Patch deployment",
        description: "Deploy latest security patch.",
        category: "Security",
        taskDate: "2025-04-09",
        deadline: "2025-04-11",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 2,
        priority: "Medium"
      },
      {
        title: "Firewall check",
        description: "Verify firewall rules and logs.",
        category: "Security",
        taskDate: "2025-04-03",
        deadline: "2025-04-07",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 1,
        priority: "Low"
      },
      {
        title: "Incident report",
        description: "Document the recent breach attempt.",
        category: "Security",
        taskDate: "2025-04-06",
        deadline: "2025-05-01",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 2,
        priority: "Medium"
      },
      {
        title: "Access rights review",
        description: "Audit user access permissions.",
        category: "Security",
        taskDate: "2025-04-07",
        deadline: "2025-04-10",
        newTask: false,
        active: true,
        failed: false,
        completed: false,
        adminId: 1,
        priority: "High"
      },
      {
        title: "Surveillance check",
        description: "Inspect camera feeds and alerts.",
        category: "Security",
        taskDate: "2025-04-02",
        deadline: "2025-04-30",
        newTask: false,
        active: true,
        failed: false,
        completed: true,
        adminId: 2,
        priority: "Low"
      }
    ]
  },
  {
    id: 6,
    name: "Goutam Mondal",
    email: "goutam@gmail.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        title: "Risk assessment",
        description: "Evaluate security vulnerabilities.",
        category: "Security",
        taskDate: "2025-04-12",
        deadline: "2025-04-18",
        newTask: true,
        active: false,
        failed: false,
        completed: false,
        adminId: 2,
        priority: "High"
      }
    ]
  }
];

export const admin = [
  {
    id: 1,
    name: "Arijit Chowdhury",
    email: "admin@gmail.com",
    password: "123",
    role: "admin",
    assignedEmployeeIds: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    name: "Shubhajit Chowdhury",
    email: "admin2@gmail.com",
    password: "123",
    role: "admin",
    assignedEmployeeIds: [3, 4, 5, 6]
  }
];