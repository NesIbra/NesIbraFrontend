export const projects = [
  {
    id: '1',
    title: 'AI Analytics Platform',
    description: 'A comprehensive analytics platform powered by artificial intelligence for real-time business insights and predictive modeling. Features include custom dashboards, automated reporting, and anomaly detection.',
    tech_stack: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'AI/ML',
    featured: true,
  },
  {
    id: '2',
    title: 'E-Commerce Suite',
    description: 'Full-featured e-commerce solution with inventory management, payment processing, and customer analytics dashboard. Built for scale with support for millions of transactions.',
    tech_stack: ['Next.js', 'Node.js', 'Stripe', 'MongoDB'],
    image_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    category: 'Web App',
    featured: true,
  },
  {
    id: '3',
    title: 'Cloud Infrastructure Manager',
    description: 'Multi-cloud infrastructure management tool with automated scaling, monitoring, and cost optimization across AWS, GCP, and Azure.',
    tech_stack: ['Go', 'Kubernetes', 'AWS', 'Terraform'],
    image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    category: 'DevOps',
    featured: true,
  },
  {
    id: '4',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication, real-time transactions, and financial insights for modern banking.',
    tech_stack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
    image_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800',
    category: 'Mobile',
    featured: false,
  },
  {
    id: '5',
    title: 'Healthcare Portal',
    description: 'Patient management system with telemedicine, appointment scheduling, and electronic health records integration.',
    tech_stack: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
    image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    category: 'Healthcare',
    featured: false,
  },
  {
    id: '6',
    title: 'Smart IoT Dashboard',
    description: 'Real-time IoT device monitoring and management dashboard with predictive maintenance capabilities and alerting system.',
    tech_stack: ['React', 'Node.js', 'InfluxDB', 'MQTT'],
    image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    category: 'IoT',
    featured: true,
  },
];

export const developers = [
  {
    id: '1',
    name: 'Alex Chen',
    role: 'CEO & Full-Stack Developer',
    skills: ['React', 'Node.js', 'Python', 'AWS'],
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Visionary tech leader with 10+ years building scalable applications.',
    social_links: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: '2',
    name: 'Sarah Miller',
    role: 'Lead Frontend Engineer',
    skills: ['React', 'TypeScript', 'Next.js', 'Figma'],
    image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Passionate about creating beautiful, accessible user interfaces.',
    social_links: { github: '#', linkedin: '#', dribbble: '#' },
  },
  {
    id: '3',
    name: 'James Wilson',
    role: 'Backend Architect',
    skills: ['Node.js', 'Go', 'PostgreSQL', 'Kubernetes'],
    image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Systems architect specializing in high-performance distributed systems.',
    social_links: { github: '#', linkedin: '#' },
  },
  {
    id: '4',
    name: 'Emily Zhang',
    role: 'AI/ML Engineer',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science'],
    image_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Machine learning expert bringing AI solutions to real-world problems.',
    social_links: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: '5',
    name: 'David Park',
    role: 'DevOps Engineer',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    image_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    bio: 'Infrastructure specialist ensuring smooth deployments and 99.99% uptime.',
    social_links: { github: '#', linkedin: '#' },
  },
  {
    id: '6',
    name: 'Lisa Kumar',
    role: 'UI/UX Designer',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    image_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    bio: 'Design thinker creating intuitive experiences through research-driven design.',
    social_links: { dribbble: '#', linkedin: '#', behance: '#' },
  },
];

export const articles = [
  {
    id: '1',
    title: 'The Future of AI in Software Development',
    content: `Artificial intelligence is revolutionizing how we build software. From code generation to automated testing, AI tools are becoming indispensable in modern development workflows.

## Key Trends

### 1. AI-Powered Code Assistants
Tools like GitHub Copilot and Claude are transforming how developers write code. These assistants can generate entire functions, suggest optimizations, and catch bugs before they reach production.

### 2. Automated Testing
AI is making testing smarter by generating test cases, identifying edge cases, and predicting where bugs are most likely to occur.

### 3. Intelligent DevOps
From automated deployment strategies to predictive scaling, AI is making infrastructure management more efficient and reliable.

## What This Means for Teams
Teams that embrace AI tools will see significant productivity gains. However, the human element remains crucial for architectural decisions, creative problem-solving, and ethical considerations.

The future of software development is a collaboration between human creativity and AI capability.`,
    excerpt: 'Exploring how AI is transforming the software development landscape with code assistants, automated testing, and intelligent DevOps.',
    author: 'Alex Chen',
    cover_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    tags: ['AI', 'Development', 'Technology'],
    created_at: '2024-12-15',
  },
  {
    id: '2',
    title: 'Building Scalable Microservices with Node.js',
    content: `Microservices architecture has become the standard for building large-scale applications. Here we explore best practices for building scalable microservices using Node.js.

## Why Microservices?

Monolithic applications become difficult to maintain as they grow. Microservices solve this by breaking applications into smaller, independent services.

## Key Principles

### 1. Single Responsibility
Each microservice should do one thing well. This makes services easier to understand, test, and maintain.

### 2. API-First Design
Design your APIs before writing implementation code. Use OpenAPI specifications to document endpoints.

### 3. Event-Driven Communication
Use message queues like RabbitMQ or Kafka for asynchronous communication between services.

## Best Practices
- Use containerization (Docker) for consistent environments
- Implement circuit breakers for fault tolerance
- Centralize logging and monitoring
- Use API gateways for routing and authentication

Building microservices requires careful planning, but the benefits in scalability and maintainability are worth the investment.`,
    excerpt: 'A comprehensive guide to building and deploying scalable microservices using Node.js and modern architecture patterns.',
    author: 'James Wilson',
    cover_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    tags: ['Node.js', 'Microservices', 'Architecture'],
    created_at: '2024-11-28',
  },
  {
    id: '3',
    title: 'Design Systems: Building Consistent UI at Scale',
    content: `A well-crafted design system is the foundation of any successful product. It ensures consistency, speeds up development, and creates a cohesive user experience.

## What is a Design System?

A design system is a collection of reusable components, guidelines, and principles that help teams build consistent products efficiently.

## Core Components

### 1. Design Tokens
Colors, typography, spacing, and other foundational values that define your visual language.

### 2. Component Library
Reusable UI components built with accessibility and flexibility in mind.

### 3. Documentation
Clear guidelines on when and how to use each component.

## Building Your System
Start small with the most commonly used components and expand over time. Focus on:
- Accessibility from day one
- Responsive design patterns
- Clear naming conventions
- Version control and changelog

Investing in a design system pays dividends as your team and product grow.`,
    excerpt: 'How to build and maintain a design system that scales with your team and ensures a consistent user experience.',
    author: 'Lisa Kumar',
    cover_image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    tags: ['Design', 'UI/UX', 'Frontend'],
    created_at: '2024-11-10',
  },
];

export const services = [
  {
    icon: 'Code',
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks. From SPAs to complex enterprise solutions.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
  },
  {
    icon: 'Brain',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by cutting-edge AI and machine learning technologies.',
  },
  {
    icon: 'Cloud',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure design, migration, and management across all major providers.',
  },
  {
    icon: 'Shield',
    title: 'Cybersecurity',
    description: 'Comprehensive security audits, penetration testing, and security-first architecture design.',
  },
  {
    icon: 'BarChart3',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with custom dashboards and reporting tools.',
  },
];
