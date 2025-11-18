/*
  EDIT GUIDE:
  - To update projects: Edit the 'projects' array below
  - Each project needs: title, description, tags (array), link
  - To add/remove projects: Add/remove objects from the array
  - The projects will automatically render on the page
*/

// Projects data - edit this array to update your projects
const projects = [
    {
        title: "EEG Graph Neural Network Toolkit",
        description: "Internal lab package for applying graph neural networks to EEG connectivity analysis and seizure localization tasks.",
        tags: ["PyTorch", "MNE", "Graph ML", "Neuroscience"],
        link: "https://github.com/raiyanIshmam"
    },
    {
        title: "Time-Series ML Demo",
        description: "Demonstration of various time-series forecasting approaches using LSTM and transformer architectures on physiological signals.",
        tags: ["TensorFlow", "Time-Series", "Deep Learning"],
        link: "https://github.com/raiyanIshmam"
    },
    {
        title: "Signal Processing Pipeline",
        description: "Modular Python pipeline for preprocessing and feature extraction from multi-channel neurophysiological recordings.",
        tags: ["Python", "SciPy", "Signal Processing", "MNE"],
        link: "https://github.com/raiyanIshmam"
    }
];

// Function to render project cards
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        
        const description = document.createElement('p');
        description.textContent = project.description;
        
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'project-tags';
        
        project.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'project-tag';
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });
        
        const link = document.createElement('a');
        link.href = project.link;
        link.className = 'project-link';
        link.textContent = 'View on GitHub →';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        projectCard.appendChild(title);
        projectCard.appendChild(description);
        projectCard.appendChild(tagsContainer);
        projectCard.appendChild(link);
        
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
