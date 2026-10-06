import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting seed...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@internos.com' },
    update: {},
    create: {
      email: 'admin@internos.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })
  console.log('Created admin user:', admin.email)

  // Create courses
  const courses = await Promise.all([
    prisma.course.upsert({
      where: { slug: 'software-engineering' },
      update: {},
      create: {
        title: 'Software Engineering',
        slug: 'software-engineering',
        description: 'Learn full-stack software development through real-world projects',
        category: 'Technology',
        level: 'Beginner-Intermediate',
        durationWeeks: 8,
        status: 'published',
      },
    }),
    prisma.course.upsert({
      where: { slug: 'data-analysis' },
      update: {},
      create: {
        title: 'Data Analysis',
        slug: 'data-analysis',
        description: 'Master data analysis with Excel, SQL, Python, and visualization tools',
        category: 'Data',
        level: 'Beginner-Intermediate',
        durationWeeks: 8,
        status: 'published',
      },
    }),
    prisma.course.upsert({
      where: { slug: 'ui-ux-design' },
      update: {},
      create: {
        title: 'UI/UX Design',
        slug: 'ui-ux-design',
        description: 'Design beautiful user interfaces and great user experiences',
        category: 'Design',
        level: 'Beginner-Intermediate',
        durationWeeks: 8,
        status: 'published',
      },
    }),
  ])
  console.log('Created courses:', courses.length)

  // Create internships
  const internships = await Promise.all([
    prisma.internship.upsert({
      where: { id: 'se-internship' },
      update: {},
      create: {
        id: 'se-internship',
        courseId: courses[0].id,
        title: 'Software Engineering Internship',
        description: 'Experience real software engineering work at a tech company',
        companyName: 'TechNova',
        department: 'Engineering',
        role: 'Software Engineering Intern',
        durationWeeks: 8,
        difficulty: 'intermediate',
        status: 'published',
      },
    }),
    prisma.internship.upsert({
      where: { id: 'da-internship' },
      update: {},
      create: {
        id: 'da-internship',
        courseId: courses[1].id,
        title: 'Data Analysis Internship',
        description: 'Work with real business data to drive insights and decisions',
        companyName: 'DataDriven Inc',
        department: 'Analytics',
        role: 'Data Analyst Intern',
        durationWeeks: 8,
        difficulty: 'intermediate',
        status: 'published',
      },
    }),
    prisma.internship.upsert({
      where: { id: 'ux-internship' },
      update: {},
      create: {
        id: 'ux-internship',
        courseId: courses[2].id,
        title: 'UI/UX Design Internship',
        description: 'Design real products and improve user experiences',
        companyName: 'DesignHub',
        department: 'Product Design',
        role: 'UI/UX Design Intern',
        durationWeeks: 8,
        difficulty: 'intermediate',
        status: 'published',
      },
    }),
  ])
  console.log('Created internships:', internships.length)

  // Create skills
  const skills = await Promise.all([
    prisma.skill.upsert({
      where: { name: 'JavaScript' },
      update: {},
      create: {
        name: 'JavaScript',
        category: 'Programming',
        description: 'Modern JavaScript programming language',
      },
    }),
    prisma.skill.upsert({
      where: { name: 'React' },
      update: {},
      create: {
        name: 'React',
        category: 'Frontend',
        description: 'React JavaScript library for building user interfaces',
      },
    }),
    prisma.skill.upsert({
      where: { name: 'Node.js' },
      update: {},
      create: {
        name: 'Node.js',
        category: 'Backend',
        description: 'Node.js JavaScript runtime for backend development',
      },
    }),
    prisma.skill.upsert({
      where: { name: 'Python' },
      update: {},
      create: {
        name: 'Python',
        category: 'Programming',
        description: 'Python programming language for data analysis and development',
      },
    }),
    prisma.skill.upsert({
      where: { name: 'SQL' },
      update: {},
      create: {
        name: 'SQL',
        category: 'Database',
        description: 'SQL database query language',
      },
    }),
    prisma.skill.upsert({
      where: { name: 'Git' },
      update: {},
      create: {
        name: 'Git',
        category: 'Tools',
        description: 'Git version control system',
      },
    }),
    prisma.skill.upsert({
      where: { name: 'TypeScript' },
      update: {},
      create: {
        name: 'TypeScript',
        category: 'Programming',
        description: 'TypeScript typed superset of JavaScript',
      },
    }),
    prisma.skill.upsert({
      where: { name: 'Figma' },
      update: {},
      create: {
        name: 'Figma',
        category: 'Design',
        description: 'Figma collaborative design tool',
      },
    }),
  ])
  console.log('Created skills:', skills.length)

  // Create modules for Software Engineering internship
  const seModules = await Promise.all([
    prisma.module.create({
      data: {
        internshipId: internships[0].id,
        title: 'Programming Fundamentals',
        description: 'Learn the basics of programming and web development',
        weekNumber: 1,
        orderIndex: 1,
        learningObjectives: 'Variables, functions, data structures, basic algorithms',
      },
    }),
    prisma.module.create({
      data: {
        internshipId: internships[0].id,
        title: 'Git and GitHub',
        description: 'Master version control with Git and collaboration with GitHub',
        weekNumber: 2,
        orderIndex: 2,
        learningObjectives: 'Git commands, branching, pull requests, collaboration',
      },
    }),
    prisma.module.create({
      data: {
        internshipId: internships[0].id,
        title: 'Frontend Development',
        description: 'Build modern web applications with React',
        weekNumber: 3,
        orderIndex: 3,
        learningObjectives: 'React components, state management, hooks',
      },
    }),
    prisma.module.create({
      data: {
        internshipId: internships[0].id,
        title: 'Backend Development',
        description: 'Create RESTful APIs and server-side applications',
        weekNumber: 4,
        orderIndex: 4,
        learningObjectives: 'REST APIs, Node.js, Express, authentication',
      },
    }),
    prisma.module.create({
      data: {
        internshipId: internships[0].id,
        title: 'Databases',
        description: 'Work with relational databases and data modeling',
        weekNumber: 5,
        orderIndex: 5,
        learningObjectives: 'SQL, database design, ORMs, data relationships',
      },
    }),
    prisma.module.create({
      data: {
        internshipId: internships[0].id,
        title: 'Testing and Debugging',
        description: 'Write tests and debug applications effectively',
        weekNumber: 6,
        orderIndex: 6,
        learningObjectives: 'Unit testing, integration testing, debugging tools',
      },
    }),
    prisma.module.create({
      data: {
        internshipId: internships[0].id,
        title: 'Team Collaboration',
        description: 'Work in teams and follow software development best practices',
        weekNumber: 7,
        orderIndex: 7,
        learningObjectives: 'Code reviews, agile methodologies, communication',
      },
    }),
    prisma.module.create({
      data: {
        internshipId: internships[0].id,
        title: 'Final Project',
        description: 'Build a complete full-stack application',
        weekNumber: 8,
        orderIndex: 8,
        learningObjectives: 'Full-stack development, deployment, presentation',
      },
    }),
  ])
  console.log('Created SE modules:', seModules.length)

  // Create tasks for first module
  const tasks = await Promise.all([
    prisma.task.create({
      data: {
        moduleId: seModules[0].id,
        title: 'Build a Personal Portfolio Website',
        description: 'Create a responsive personal portfolio website using HTML, CSS, and JavaScript',
        instructions: 'Create a single-page portfolio website with sections for About, Projects, and Contact. Use semantic HTML, modern CSS with Flexbox/Grid, and add JavaScript for interactivity.',
        difficulty: 'beginner',
        estimatedHours: 4,
        submissionType: 'URL',
        evaluationCriteria: 'Code quality, responsiveness, design, interactivity',
      },
    }),
    prisma.task.create({
      data: {
        moduleId: seModules[0].id,
        title: 'JavaScript Basics Quiz',
        description: 'Test your knowledge of JavaScript fundamentals',
        instructions: 'Complete a quiz covering variables, functions, arrays, objects, and basic algorithms.',
        difficulty: 'beginner',
        estimatedHours: 1,
        submissionType: 'TEXT',
        evaluationCriteria: 'Accuracy of answers, understanding of concepts',
      },
    }),
  ])
  console.log('Created tasks:', tasks.length)

  console.log('Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
