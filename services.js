document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const modal = document.getElementById('project-modal');
  const closeModal = document.querySelector('.close-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalDetails = document.getElementById('modal-details');

  // Project details data
  const projectDetails = {
    'frontend-1': {
      title: 'Project One',
      description: 'Frontend development project with React and Redux.',
      details: 'This project involved building a dynamic web application using React for the UI components and Redux for state management. It features user authentication, real-time data updates, and responsive design.',
      technologies: ['React', 'Redux', 'JavaScript', 'CSS3', 'HTML5']
    },
    'frontend-2': {
      title: 'Project Two',
      description: 'Interactive dashboard with Vue.js and D3.js.',
      details: 'An interactive data visualization dashboard built with Vue.js and D3.js. It includes charts, graphs, and real-time data feeds for business analytics.',
      technologies: ['Vue.js', 'D3.js', 'JavaScript', 'SCSS', 'Webpack']
    },
    'frontend-3': {
      title: 'Project Three',
      description: 'Fullstack e-commerce platform with MERN stack.',
      details: 'A complete e-commerce solution with user accounts, product catalog, shopping cart, and payment integration using the MERN stack.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API']
    },
    'frontend-4': {
      title: 'Project Four',
      description: 'Mobile app development with React Native.',
      details: 'Cross-platform mobile application developed with React Native, featuring offline capabilities and native device integrations.',
      technologies: ['React Native', 'Expo', 'Redux', 'Firebase']
    },
    'frontend-5': {
      title: 'Project Five',
      description: 'Portfolio website with Angular and TypeScript.',
      details: 'A modern portfolio website built with Angular and TypeScript, showcasing projects with smooth animations and interactive elements.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Angular CLI']
    },
    'frontend-6': {
      title: 'Project Six',
      description: 'Blog platform with Gatsby and GraphQL.',
      details: 'A fast, static blog platform using Gatsby and GraphQL for content management, with SEO optimization and markdown support.',
      technologies: ['Gatsby', 'GraphQL', 'React', 'Markdown', 'Netlify']
    },
    'backend-1': {
      title: 'Project One',
      description: 'Backend API development with Node.js and Express.',
      details: 'RESTful API built with Node.js and Express, including authentication, data validation, and integration with external services.',
      technologies: ['Node.js', 'Express', 'JWT', 'MongoDB', 'Mongoose']
    },
    'backend-2': {
      title: 'Project Two',
      description: 'RESTful API with Python and Django.',
      details: 'Scalable REST API developed with Django and Django REST Framework, featuring user management and data serialization.',
      technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis']
    },
    'backend-3': {
      title: 'Project Three',
      description: 'Microservices architecture with Spring Boot.',
      details: 'Microservices-based application using Spring Boot, with service discovery, load balancing, and containerization.',
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Kubernetes']
    },
    'backend-4': {
      title: 'Project Four',
      description: 'Database management with PostgreSQL and MongoDB.',
      details: 'Database design and management system supporting both relational and NoSQL databases with data migration and backup solutions.',
      technologies: ['PostgreSQL', 'MongoDB', 'SQL', 'NoSQL', 'Docker']
    },
    'backend-5': {
      title: 'Project Five',
      description: 'Marketing website with SEO optimization.',
      details: 'Backend for a marketing website with SEO optimization, content management, and analytics integration.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Google Analytics', 'SEO Tools']
    },
    'backend-6': {
      title: 'Project Six',
      description: 'Cloud infrastructure setup and automation.',
      details: 'Automated cloud infrastructure deployment using Terraform and Ansible, with monitoring and scaling capabilities.',
      technologies: ['AWS', 'Terraform', 'Ansible', 'Docker', 'Prometheus']
    }
  };

  // Service tab switching
  const serviceTabButtons = document.querySelectorAll('.service-tab-button');
  const serviceSections = document.querySelectorAll('.service-category');

  serviceTabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and sections
      serviceTabButtons.forEach(btn => btn.classList.remove('active'));
      serviceSections.forEach(section => section.classList.remove('active'));

      // Add active class to clicked button and corresponding section
      button.classList.add('active');
      const service = button.getAttribute('data-service');
      document.getElementById(service).classList.add('active');
    });
  });

  // Project tab switching (for the projects section)
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active class to clicked button and corresponding content
      button.classList.add('active');
      const tab = button.getAttribute('data-tab');
      document.getElementById(tab).classList.add('active');
    });
  });

  // Modal functionality
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('project-link')) {
      e.preventDefault();
      const projectItem = e.target.closest('.project-item');
      const projectId = projectItem.getAttribute('data-project');
      const project = projectDetails[projectId];

      if (project) {
        modalImage.src = projectItem.querySelector('img').src;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalDetails.innerHTML = `
          <p><strong>Details:</strong> ${project.details}</p>
          <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
        `;
        modal.style.display = 'block';
      }
    }
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
