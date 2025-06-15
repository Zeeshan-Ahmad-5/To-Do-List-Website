# To-Do-List-Website
🌟 To-Do List Application
Welcome to the To-Do List Application, a sleek and modern task management tool designed to help you stay organized with style! Built with vanilla HTML, CSS, and JavaScript, this app combines a stunning dark-themed interface with intuitive functionality. Whether you're managing daily chores or long-term projects, this app makes task management a breeze with features like adding, editing, deleting, and marking tasks as complete—all wrapped in a responsive, user-friendly design.

🎯 Features

📝 Add Tasks: Quickly add tasks with a clean, responsive input form.
✏️ Edit Tasks: Modify tasks on the fly with a prompt-based editing system.
🗑️ Delete Tasks: Remove tasks with a single click for effortless cleanup.
✅ Mark as Complete: Toggle checkboxes to mark tasks as done with a stylish strikethrough effect.
📱 Responsive Design: Seamlessly adapts to desktops, tablets, and mobile devices.
🚀 Interactive UI: Enjoy smooth hover effects, button animations, and a custom scrollbar.
⌨️ Keyboard Support: Press Enter to add tasks for faster workflows.
🌙 Dark Theme: A modern, eye-friendly dark theme with vibrant color accents.


📊 Task Activity Overview
Below is a sample chart showcasing the number of tasks added over a week, demonstrating the app's potential for tracking productivity trends.
{
  "type": "line",
  "data": {
    "labels": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "datasets": [{
      "label": "Tasks Added",
      "data": [5, 8, 12, 10, 15, 7, 9],
      "borderColor": "#f0a500",
      "backgroundColor": "rgba(240, 165, 0, 0.2)",
      "fill": true,
      "tension": 0.4
    }]
  },
  "options": {
    "responsive": true,
    "plugins": {
      "legend": {
        "labels": {
          "color": "#ece9e9"
        }
      }
    },
    "scales": {
      "x": {
        "ticks": {
          "color": "#ece9e9"
        },
        "grid": {
          "color": "rgba(255, 255, 255, 0.1)"
        }
      },
      "y": {
        "ticks": {
          "color": "#ece9e9"
        },
        "grid": {
          "color": "rgba(255, 255, 255, 0.1)"
        }
      }
    }
  }
}


🌐 Demo
Experience the app in action! Check out the live demo here (replace with your deployed link, e.g., GitHub Pages, Netlify, or Vercel).

🛠️ Installation
Get started in just a few steps:

Clone the repository:git clone https://github.com/your-username/todo-list-app.git


Navigate to the project directory:cd todo-list-app


Run the app:
Open index.html in a web browser (e.g., Chrome, Firefox, or Edge).
For a better development experience, use a local server like VS Code's Live Server or run:npx serve





No dependencies or build tools required—pure vanilla JavaScript goodness!

🚀 Usage
Master your tasks with these simple steps:

Add a Task:
Type your task in the input field.
Click Add Task or hit Enter.


Edit a Task:
Click the green Edit button next to a task.
Update the task in the prompt and confirm.


Delete a Task:
Click the red Delete button to remove a task.


Mark as Complete:
Check the checkbox to mark a task as done (adds a strikethrough).
Uncheck to revert.




💻 Technologies

HTML5: Semantic structure for accessibility and clarity.
CSS3: Custom styling with Flexbox, shadows, and a vibrant dark theme.
JavaScript (Vanilla): Dynamic task management with no frameworks.
Responsive Design: Optimized for all screen sizes using media queries.


📂 File Structure
todo-list-app/
├── index.html       # Core HTML structure
├── style.css        # Styling for the dark-themed UI
├── script.js        # JavaScript logic for task functionality
└── README.md        # You're reading it!


🤝 Contributing
We love contributions! To get involved:

Fork the repository.
Create a feature branch:git checkout -b feature/your-amazing-feature


Commit your changes:git commit -m "Add your amazing feature"


Push to your branch:git push origin feature/your-amazing-feature


Open a Pull Request.

Please follow the existing code style and add comments where necessary.

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

🌟 Acknowledgments
Built with passion by [Your Name]. Let's connect on GitHub or X!

"The secret of getting ahead is getting started." – Mark Twain

Start organizing your tasks today with this stylish To-Do List app! 🚀
