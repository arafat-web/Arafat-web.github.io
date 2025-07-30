// Mobile menu toggle with improved functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const navbar = document.querySelector('.navbar');

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = navMenu.classList.contains('active');
    
    navMenu.classList.toggle('active');
    
    // Toggle hamburger to X icon
    const icon = mobileMenuBtn.querySelector('i');
    if (icon) {
      if (isActive) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    }
    
    // Prevent body scroll when menu is open
    if (!isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      navMenu.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
      document.body.style.overflow = '';
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
      document.body.style.overflow = '';
    }
  });

  // Handle window resize - close menu if switching to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
      document.body.style.overflow = '';
    }
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animated counters
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 20);
}

// Intersection Observer for stats
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        animateCounter(counter, target);
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
  observer.observe(statsSection);
}

// Parallax effect for orbs (only on non-mobile devices)
if (window.innerWidth > 768) {
  window.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
      const speed = (index + 1) * 0.5;
      orb.style.transform = `translate(${x * speed * 50}px, ${y * speed * 50}px)`;
    });
  });
}

// Glitch effect for logo
const logo = document.querySelector('.logo');
setInterval(() => {
  if (Math.random() < 0.1) {
    logo.style.textShadow = `
      ${Math.random() * 10 - 5}px 0 #ff0000,
      ${Math.random() * 10 - 5}px 0 #00ff00,
      ${Math.random() * 10 - 5}px 0 #0000ff
    `;
    setTimeout(() => {
      logo.style.textShadow = '0 0 20px #00ffff';
    }, 100);
  }
}, 2000);

// Dynamic typing effect
const subtitle = document.querySelector('.hero-subtitle');
const originalText = '> Building tomorrow\'s software today_';
let i = 0;

function typeWriter() {
  if (i < originalText.length) {
    subtitle.textContent = originalText.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect after page load
window.addEventListener('load', () => {
  setTimeout(typeWriter, 1000);
});

// Mobile-specific improvements
function handleMobileImprovements() {
  // Prevent zoom on input focus for iOS
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.style.fontSize = '16px';
      });
      input.addEventListener('blur', () => {
        input.style.fontSize = '';
      });
    });
  }

  // Handle orientation changes
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  });

  // Optimize animations for mobile
  if (window.innerWidth <= 768) {
    // Reduce animation complexity on mobile
    const animatedElements = document.querySelectorAll('.orb, .cyber-grid');
    animatedElements.forEach(el => {
      el.style.animationDuration = '30s';
    });
  }
}

// Touch-friendly button feedback
document.querySelectorAll('.btn-cyber, .service-card, .social-link').forEach(element => {
  element.addEventListener('touchstart', function() {
    this.style.transform = 'scale(0.98)';
  });
  
  element.addEventListener('touchend', function() {
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});

// Initialize mobile improvements
handleMobileImprovements();

// Re-check on resize
window.addEventListener('resize', handleMobileImprovements);

// GitHub API Integration for real-time data
class GitHubAPIManager {
  constructor() {
    this.username = 'arafat-web';
    this.projects = [
      { name: 'Bulk-Email-Sender', element: null },
      { name: 'Task-Manager', element: null },
      { name: 'LinaTheBot', element: null },
      { name: 'Vuecommerce', element: null },
      { name: 'blood-donation-laravel', element: null },
      { name: 'countries_states_cities', element: null }
    ];
    this.init();
  }

  async init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.fetchAndUpdateProjects());
    } else {
      this.fetchAndUpdateProjects();
    }
  }

  async fetchRepoData(repoName) {
    try {
      const response = await fetch(`https://api.github.com/repos/${this.username}/${repoName}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn(`Failed to fetch data for ${repoName}:`, error);
      return null;
    }
  }

  async fetchAndUpdateProjects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    for (let i = 0; i < this.projects.length && i < portfolioItems.length; i++) {
      const project = this.projects[i];
      const portfolioItem = portfolioItems[i];
      
      // Add loading indicator
      const techElement = portfolioItem.querySelector('.portfolio-tech');
      if (techElement) {
        const originalText = techElement.textContent;
        techElement.innerHTML = originalText.replace(/⭐ \d+/, '⭐ <span class="loading-stars">...</span>');
      }

      // Fetch repo data
      const repoData = await this.fetchRepoData(project.name);
      
      if (repoData) {
        this.updateProjectData(portfolioItem, repoData, project.name);
      } else {
        // Remove loading indicator if failed
        if (techElement) {
          techElement.innerHTML = techElement.innerHTML.replace('<span class="loading-stars">...</span>', '?');
        }
      }
      
      // Small delay between API calls to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  updateProjectData(portfolioItem, repoData, projectName) {
    // Update star count
    const techElement = portfolioItem.querySelector('.portfolio-tech');
    if (techElement) {
      const currentText = techElement.textContent;
      const newText = currentText.replace(/⭐ (\d+|\?|<span.*<\/span>|\.\.\.)/g, `⭐ ${repoData.stargazers_count}`);
      techElement.textContent = newText;
    }

    // Add GitHub link to project
    this.addGitHubLink(portfolioItem, repoData.html_url, projectName);
    
    // Keep original descriptions - don't update them
    // Original descriptions are better than GitHub repo descriptions
  }

  addGitHubLink(portfolioItem, repoUrl, projectName) {
    const portfolioContent = portfolioItem.querySelector('.portfolio-content');
    if (!portfolioContent) return;

    // Check if GitHub link already exists
    if (portfolioContent.querySelector('.github-link')) return;

    // Create GitHub link element
    const githubLink = document.createElement('div');
    githubLink.className = 'github-link';
    githubLink.innerHTML = `
      <a href="${repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-github">
        <i class="fab fa-github"></i>
        <span>View on GitHub</span>
      </a>
    `;

    // Insert after description
    const description = portfolioContent.querySelector('.portfolio-description');
    if (description) {
      description.parentNode.insertBefore(githubLink, description.nextSibling);
    } else {
      portfolioContent.appendChild(githubLink);
    }
  }
}

// Initialize GitHub API Manager
const githubManager = new GitHubAPIManager();
