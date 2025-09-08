import React, { useState } from 'react';
import { Search, Filter, TrendingUp, DollarSign, Clock, Users, ChevronRight, Star } from 'lucide-react';

export default function CourseExplorer() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Courses', count: 45 },
    { id: 'science', name: 'Science', count: 12 },
    { id: 'commerce', name: 'Commerce', count: 8 },
    { id: 'arts', name: 'Arts', count: 10 },
    { id: 'vocational', name: 'Vocational', count: 15 }
  ];

  const courses = [
    {
      id: 1,
      name: 'Computer Science Engineering',
      category: 'science',
      duration: '4 years',
      averageSalary: '₹8-25 LPA',
      description: 'Learn programming, software development, AI, and emerging technologies.',
      rating: 4.8,
      enrolledStudents: 12500,
      topColleges: ['IIT Delhi', 'NSIT', 'DTU'],
      careerPaths: [
        'Software Engineer',
        'Data Scientist',
        'Product Manager',
        'AI Specialist'
      ],
      governmentExams: ['GATE', 'UGC NET', 'ISRO Scientist'],
      skills: ['Programming', 'Problem Solving', 'Mathematics', 'Logic']
    },
    {
      id: 2,
      name: 'Bachelor of Commerce',
      category: 'commerce',
      duration: '3 years',
      averageSalary: '₹4-12 LPA',
      description: 'Foundation in business, accounting, finance, and economics.',
      rating: 4.5,
      enrolledStudents: 18700,
      topColleges: ['SRCC', 'LSR', 'Hindu College'],
      careerPaths: [
        'Chartered Accountant',
        'Financial Analyst',
        'Business Consultant',
        'Investment Banker'
      ],
      governmentExams: ['UPSC', 'Banking Exams', 'CA', 'CS'],
      skills: ['Analytical Thinking', 'Communication', 'Mathematics', 'Business Acumen']
    },
    {
      id: 3,
      name: 'Psychology',
      category: 'arts',
      duration: '3 years',
      averageSalary: '₹3-10 LPA',
      description: 'Study human behavior, mental processes, and therapeutic techniques.',
      rating: 4.6,
      enrolledStudents: 8900,
      topColleges: ['JNU', 'BHU', 'Jamia Millia'],
      careerPaths: [
        'Clinical Psychologist',
        'Counselor',
        'HR Specialist',
        'Research Scientist'
      ],
      governmentExams: ['UGC NET', 'UPSC', 'State PSC'],
      skills: ['Empathy', 'Communication', 'Research', 'Critical Thinking']
    },
    {
      id: 4,
      name: 'Mechanical Engineering',
      category: 'science',
      duration: '4 years',
      averageSalary: '₹6-20 LPA',
      description: 'Design and manufacture machines, engines, and mechanical systems.',
      rating: 4.7,
      enrolledStudents: 15200,
      topColleges: ['IIT Bombay', 'NIT Trichy', 'BITS Pilani'],
      careerPaths: [
        'Mechanical Engineer',
        'Project Manager',
        'Design Engineer',
        'Manufacturing Engineer'
      ],
      governmentExams: ['GATE', 'UPSC Engineering Services', 'ISRO'],
      skills: ['Problem Solving', 'Mathematics', 'Design Thinking', 'Technical Analysis']
    }, {
      id: 6,
      name: 'Computer Science Engineering',
      category: 'science',
      duration: '4 years',
      averageSalary: '₹8-25 LPA',
      description: 'Learn programming, software development, AI, and emerging technologies.',
      rating: 4.8,
      enrolledStudents: 12500,
      topColleges: ['IIT Delhi', 'NSIT', 'DTU'],
      careerPaths: [
        'Software Engineer',
        'Data Scientist',
        'Product Manager',
        'AI Specialist'
      ],
      governmentExams: ['GATE', 'UGC NET', 'ISRO Scientist'],
      skills: ['Programming', 'Problem Solving', 'Mathematics', 'Logic']
    },
      {
    id: 14,
    name: 'Pharmacy (B.Pharm)',
    category: 'medical',
    duration: '4 years',
    averageSalary: '₹4-12 LPA',
    description: 'Learn about drugs, pharmaceuticals, and healthcare research.',
    rating: 4.3,
    enrolledStudents: 4000,
    topColleges: ['Jamia Hamdard', 'BITS Pilani', 'Manipal University'],
    careerPaths: ['Pharmacist', 'Drug Inspector', 'Research Scientist'],
    governmentExams: ['GPAT', 'UPSC Drug Inspector'],
    skills: ['Chemistry', 'Biology', 'Research', 'Healthcare']
  },  {
    id: 7,
    name: 'Bachelor of Commerce (B.Com)',
    category: 'commerce',
    duration: '3 years',
    averageSalary: '₹3-10 LPA',
    description: 'Covers finance, accounting, taxation, and business management.',
    rating: 4.3,
    enrolledStudents: 15000,
    topColleges: ['SRCC Delhi', 'Christ University', 'St. Xavier’s College'],
    careerPaths: ['Accountant', 'Financial Analyst', 'Auditor'],
    governmentExams: ['CA', 'CMA', 'CS'],
    skills: ['Accounting', 'Finance', 'Taxation', 'Analytical Thinking']
  },
  {
    id: 8,
    name: 'Bachelor of Business Administration (BBA)',
    category: 'commerce',
    duration: '3 years',
    averageSalary: '₹4-12 LPA',
    description: 'Introduction to management, entrepreneurship, and business skills.',
    rating: 4.2,
    enrolledStudents: 12000,
    topColleges: ['NMIMS', 'Christ University', 'IIM Indore (IPM)'],
    careerPaths: ['Business Analyst', 'Marketing Manager', 'Entrepreneur'],
    governmentExams: ['CAT', 'MAT', 'IPMAT'],
    skills: ['Management', 'Leadership', 'Marketing', 'Finance']
  },
  {
    id: 9,
    name: 'Bachelor of Arts (BA)',
    category: 'arts',
    duration: '3 years',
    averageSalary: '₹3-8 LPA',
    description: 'Study humanities, social sciences, languages, and cultural studies.',
    rating: 4.0,
    enrolledStudents: 20000,
    topColleges: ['JNU', 'DU', 'TISS'],
    careerPaths: ['Researcher', 'Teacher', 'Writer', 'Civil Services'],
    governmentExams: ['UPSC', 'NET', 'SSC CGL'],
    skills: ['Critical Thinking', 'Writing', 'Research', 'Analysis']
  },
  {
    id: 10,
    name: 'Bachelor of Science (B.Sc)',
    category: 'science',
    duration: '3 years',
    averageSalary: '₹4-10 LPA',
    description: 'Covers core sciences like Physics, Chemistry, Mathematics, and Biology.',
    rating: 4.1,
    enrolledStudents: 18000,
    topColleges: ['Miranda House', 'Presidency University', 'Madras Christian College'],
    careerPaths: ['Researcher', 'Scientist', 'Lab Technician'],
    governmentExams: ['CSIR NET', 'GATE', 'UPSC'],
    skills: ['Analytical Thinking', 'Laboratory Skills', 'Research', 'Problem Solving']
  },
  {
    id: 11,
    name: 'Bachelor of Laws (LLB)',
    category: 'law',
    duration: '3 years (after graduation) / 5 years (integrated)',
    averageSalary: '₹5-15 LPA',
    description: 'Study constitutional law, criminal law, civil law, and legal systems.',
    rating: 4.4,
    enrolledStudents: 7000,
    topColleges: ['NLSIU Bangalore', 'NALSAR Hyderabad', 'Faculty of Law DU'],
    careerPaths: ['Lawyer', 'Judge', 'Corporate Legal Advisor'],
    governmentExams: ['CLAT', 'AIBE', 'Judicial Services'],
    skills: ['Legal Reasoning', 'Communication', 'Critical Thinking']
  },
  {
    id: 12,
    name: 'Bachelor of Medicine and Surgery (MBBS)',
    category: 'medical',
    duration: '5.5 years',
    averageSalary: '₹8-20 LPA',
    description: 'Study anatomy, physiology, medicine, and surgery to become a doctor.',
    rating: 4.9,
    enrolledStudents: 6000,
    topColleges: ['AIIMS Delhi', 'CMC Vellore', 'JIPMER'],
    careerPaths: ['Doctor', 'Surgeon', 'Medical Researcher'],
    governmentExams: ['NEET UG', 'AIIMS PG', 'PGIMER'],
    skills: ['Medical Knowledge', 'Critical Thinking', 'Problem Solving', 'Empathy']
  },
  {
    id: 13,
    name: 'Bachelor of Dental Surgery (BDS)',
    category: 'medical',
    duration: '5 years',
    averageSalary: '₹6-15 LPA',
    description: 'Focus on oral health, dental care, and maxillofacial surgery.',
    rating: 4.5,
    enrolledStudents: 3500,
    topColleges: ['Maulana Azad Institute of Dental Sciences', 'Manipal College of Dental Sciences'],
    careerPaths: ['Dentist', 'Orthodontist', 'Dental Surgeon'],
    governmentExams: ['NEET UG', 'AIIMS PG'],
    skills: ['Surgical Skills', 'Medical Knowledge', 'Attention to Detail']
  },
  {
    id: 14,
    name: 'Pharmacy (B.Pharm)',
    category: 'medical',
    duration: '4 years',
    averageSalary: '₹4-12 LPA',
    description: 'Learn about drugs, pharmaceuticals, and healthcare research.',
    rating: 4.3,
    enrolledStudents: 4000,
    topColleges: ['Jamia Hamdard', 'BITS Pilani', 'Manipal University'],
    careerPaths: ['Pharmacist', 'Drug Inspector', 'Research Scientist'],
    governmentExams: ['GPAT', 'UPSC Drug Inspector'],
    skills: ['Chemistry', 'Biology', 'Research', 'Healthcare']
  },
  {
    id: 15,
    name: 'Bachelor of Architecture (B.Arch)',
    category: 'science',
    duration: '5 years',
    averageSalary: '₹6-18 LPA',
    description: 'Covers design, construction, urban planning, and interior design.',
    rating: 4.5,
    enrolledStudents: 3000,
    topColleges: ['SPA Delhi', 'CEPT Ahmedabad', 'JJ School of Architecture'],
    careerPaths: ['Architect', 'Urban Designer', 'Interior Designer'],
    governmentExams: ['NATA', 'JEE Main (B.Arch)'],
    skills: ['Creativity', 'Design', 'Mathematics', 'Visualization']
  },
  {
    id: 16,
    name: 'Bachelor of Fine Arts (BFA)',
    category: 'arts',
    duration: '4 years',
    averageSalary: '₹3-8 LPA',
    description: 'Learn painting, sculpture, performing arts, and creative expression.',
    rating: 4.2,
    enrolledStudents: 2500,
    topColleges: ['MSU Baroda', 'Kala Bhavana Shantiniketan'],
    careerPaths: ['Artist', 'Graphic Designer', 'Animator'],
    governmentExams: ['UGC NET (Fine Arts)', 'Design Aptitude Tests'],
    skills: ['Creativity', 'Drawing', 'Imagination', 'Design Thinking']
  },
  {
    id: 17,
    name: 'Chartered Accountancy (CA)',
    category: 'commerce',
    duration: '5 years (with training)',
    averageSalary: '₹8-30 LPA',
    description: 'Covers accounting, taxation, audit, and financial management.',
    rating: 4.8,
    enrolledStudents: 6000,
    topColleges: ['ICAI (Self-study based)'],
    careerPaths: ['Chartered Accountant', 'Auditor', 'Financial Consultant'],
    governmentExams: ['CA Foundation', 'CA Intermediate', 'CA Final'],
    skills: ['Accounting', 'Finance', 'Analytical Skills']
  },
  {
    id: 18,
    name: 'Company Secretary (CS)',
    category: 'commerce',
    duration: '3-5 years',
    averageSalary: '₹5-18 LPA',
    description: 'Specializes in corporate law, compliance, and governance.',
    rating: 4.4,
    enrolledStudents: 4500,
    topColleges: ['ICSI (Self-study based)'],
    careerPaths: ['Company Secretary', 'Corporate Consultant'],
    governmentExams: ['CS Executive', 'CS Professional'],
    skills: ['Corporate Law', 'Management', 'Compliance']
  },
  {
    id: 19,
    name: 'Fashion Designing',
    category: 'arts',
    duration: '4 years',
    averageSalary: '₹4-15 LPA',
    description: 'Study fashion trends, textiles, and apparel design.',
    rating: 4.3,
    enrolledStudents: 5000,
    topColleges: ['NIFT Delhi', 'NIFT Mumbai'],
    careerPaths: ['Fashion Designer', 'Stylist', 'Merchandiser'],
    governmentExams: ['NIFT Entrance Exam'],
    skills: ['Creativity', 'Design', 'Textiles', 'Marketing']
  },
  {
    id: 20,
    name: 'Hotel Management (BHM)',
    category: 'hospitality',
    duration: '4 years',
    averageSalary: '₹4-12 LPA',
    description: 'Learn hospitality, catering, tourism, and event management.',
    rating: 4.2,
    enrolledStudents: 7000,
    topColleges: ['IHM Delhi', 'IHM Mumbai'],
    careerPaths: ['Hotel Manager', 'Chef', 'Event Manager'],
    governmentExams: ['NCHMCT JEE'],
    skills: ['Hospitality', 'Management', 'Communication']
  }

  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Courses</h1>
          <p className="text-gray-600">
            Discover your perfect course with detailed career paths and opportunities
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses, careers, or skills..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              {/* Course Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
                    <p className="text-gray-600 text-sm">{course.description}</p>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-gray-700 ml-1">{course.rating}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Duration</p>
                    <p className="text-sm font-medium">{course.duration}</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Avg. Salary</p>
                    <p className="text-sm font-medium">{course.averageSalary}</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Enrolled</p>
                    <p className="text-sm font-medium">{course.enrolledStudents.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Career Paths */}
              <div className="px-6 pb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Top Career Paths</h4>
                <div className="flex flex-wrap gap-2">
                  {course.careerPaths.slice(0, 3).map((path, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {path}
                    </span>
                  ))}
                  {course.careerPaths.length > 3 && (
                    <span className="text-blue-600 text-xs font-medium">
                      +{course.careerPaths.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Skills Required */}
              <div className="px-6 pb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                  View Detailed Career Path
                  <ChevronRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}