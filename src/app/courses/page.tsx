export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Explore Programs</h1>
        <p className="text-xl text-gray-600 mb-12">
          Choose your career path and start your AI-powered internship journey
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Software Engineering", duration: "8 weeks", level: "Beginner-Intermediate", category: "Technology" },
            { title: "Data Analysis", duration: "8 weeks", level: "Beginner-Intermediate", category: "Data" },
            { title: "UI/UX Design", duration: "8 weeks", level: "Beginner-Intermediate", category: "Design" },
            { title: "Cybersecurity", duration: "8 weeks", level: "Intermediate", category: "Technology" },
            { title: "Digital Marketing", duration: "8 weeks", level: "Beginner", category: "Marketing" },
            { title: "Product Management", duration: "8 weeks", level: "Intermediate", category: "Business" },
          ].map((course) => (
            <div key={course.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="h-40 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg mb-4"></div>
              <div className="text-sm text-indigo-600 font-semibold mb-2">{course.category}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.duration} • {course.level}</p>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                View Program
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
