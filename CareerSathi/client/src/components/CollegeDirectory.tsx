import React, { useState } from 'react';
import { Search, MapPin, Star, DollarSign, Users, Wifi, Home, Book, Award, Filter } from 'lucide-react';

export default function CollegeDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('government');

  const colleges = [
    {
      id: 1,
      name: 'Delhi Univerity - North Campus',
      location: 'Delhi',
      type: 'Government',
      rating: 4.8,
      courses: ['B.Sc Computer Science', 'B.Com', 'BA Economics', 'B.Sc Physics'],
      cutoffs: {
        'B.Sc Computer Science': 95.5,
        'B.Com': 97.2,
        'BA Economics': 96.8
      },
      fees: {
        'B.Sc Computer Science': 15000,
        'B.Com': 12000,
        'BA Economics': 11000
      },
      facilities: ['WiFi', 'Library', 'Hostel', 'Laboratory', 'Sports Complex'],
      mediumOfInstruction: ['English', 'Hindi'],
      totalStudents: 25000,
      placementRate: 85,
      topRecruiters: ['TCS', 'Infosys', 'Deloitte', 'EY'],
      established: 1922
    },
    {
      id: 2,
      name: 'Netaji Subhas University of Technology',
      location: 'Delhi',
      type: 'Government',
      rating: 4.6,
      courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'MBA'],
      cutoffs: {
        'B.Tech CSE': 92.5,
        'B.Tech ECE': 89.2,
        'B.Tech Mechanical': 87.8
      },
      fees: {
        'B.Tech CSE': 65000,
        'B.Tech ECE': 60000,
        'B.Tech Mechanical': 58000
      },
      facilities: ['WiFi', 'Library', 'Hostel', 'Laboratory', 'Cafeteria', 'Auditorium'],
      mediumOfInstruction: ['English'],
      totalStudents: 8500,
      placementRate: 92,
      topRecruiters: ['Microsoft', 'Amazon', 'Google', 'Samsung'],
      established: 1983
    },
    {
      id: 3,
      name: 'Jawaharlal Nehru University',
      location: 'Delhi',
      type: 'Government',
      rating: 4.9,
      courses: ['MA Political Science', 'PhD International Relations', 'BA(Hons) Foreign Languages'],
      cutoffs: {
        'MA Political Science': 85.0,
        'BA(Hons) Foreign Languages': 82.5
      },
      fees: {
        'MA Political Science': 8000,
        'BA(Hons) Foreign Languages': 6000
      },
      facilities: ['WiFi', 'Library', 'Hostel', 'Cultural Center', 'Sports Complex'],
      mediumOfInstruction: ['English', 'Hindi'],
      totalStudents: 12000,
      placementRate: 78,
      topRecruiters: ['UNESCO', 'Ministry of External Affairs', 'Think Tanks', 'NGOs'],
      established: 1969
    },
    {
      id: 4,
      name: 'Bharati Vidyapeeth University',
      location: 'Maharashtra',
      type: 'Government',
      rating: 4.4,
      courses: ['MBBS', 'BDS', 'B.Pharm', 'B.Sc Nursing'],
      cutoffs: {
        'MBBS': 580,
        'BDS': 520,
        'B.Pharm': 75.5
      },
      fees: {
        'MBBS': 125000,
        'BDS': 95000,
        'B.Pharm': 55000
      },
      facilities: ['Hospital', 'Library', 'Hostel', 'Laboratory', 'Research Center'],
      mediumOfInstruction: ['English'],
      totalStudents: 18000,
      placementRate: 88,
      topRecruiters: ['Apollo Hospitals', 'Fortis', 'Max Healthcare', 'Cipla'],
      established: 1964
    }, {id: 5,
      name: 'SRM University Delhi - North Campus',
      location: 'Delhi',
      type: 'Government',
      rating: 4.8,
      courses: ['B.Sc Computer Science', 'B.Com', 'BA Economics', 'B.Sc Physics'],
      cutoffs: {
        'B.Sc Computer Science': 95.5,
        'B.Com': 97.2,
        'BA Economics': 96.8
      },
      fees: {
        'B.Sc Computer Science': 15000,
        'B.Com': 12000,
        'BA Economics': 11000
      },
      facilities: ['WiFi', 'Library', 'Hostel', 'Laboratory', 'Sports Complex'],
      mediumOfInstruction: ['English', 'Hindi'],
      totalStudents: 25000,
      placementRate: 85,
      topRecruiters: ['TCS', 'Infosys', 'Deloitte', 'EY'],
      established: 1922},
      {
  "id": 6,
  "name": "College of Engineering Pune (COEP)",
  "location": "Maharashtra",
  "type": "Government",
  "rating": 4.7,
  "courses": ["B.Tech CSE", "B.Tech Mechanical", "M.Tech"],
  "cutoffs": { "B.Tech CSE": 97.5 },
  "fees": { "B.Tech CSE": 90000 },
  "facilities": ["Workshops", "Library", "Hostel"],
  "mediumOfInstruction": ["English"],
  "totalStudents": 8000,
  "placementRate": 88,
  "topRecruiters": ["TCS", "Infosys", "Cummins"],
  "established": 1854
},
 {
        "id": 7,
        "name": "Delhi Technological University (DTU)",
        "location": "Delhi",
        "type": "Government",
        "rating": 4.6,
        "courses": ["B.Tech CSE", "B.Tech ECE", "M.Tech"],
        "cutoffs": { "B.Tech CSE": 97.5 },
        "fees": { "B.Tech CSE": 190000 },
        "facilities": ["Research Labs", "Incubation Centre", "Hostel"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 9000,
        "placementRate": 90,
        "topRecruiters": ["Amazon", "Microsoft", "Google"],
        "established": 1941
      },
      {
        "id": 8,
        "name": "Indraprastha Institute of Information Technology Delhi (IIIT-D)",
        "location": "Delhi",
        "type": "Government",
        "rating": 4.7,
        "courses": ["B.Tech CSE", "B.Tech ECE", "M.Tech"],
        "cutoffs": { "B.Tech CSE": 97.2 },
        "fees": { "B.Tech CSE": 350000 },
        "facilities": ["Research Labs", "Hostel", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 3000,
        "placementRate": 95,
        "topRecruiters": ["Google", "Adobe", "Amazon"],
        "established": 2008
      },
      {
        "id": 9,
        "name": "Lady Shri Ram College for Women (LSR)",
        "location": "Delhi",
        "type": "Government-Aided",
        "rating": 4.8,
        "courses": ["BA (Hons) Economics", "BA (Hons) English"],
        "cutoffs": { "BA (Hons) Economics": 97.0 },
        "fees": { "BA (Hons) Economics": 19000 },
        "facilities": ["Library", "Placement Cell", "WiFi"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 2500,
        "placementRate": 86,
        "topRecruiters": ["McKinsey", "BCG", "EY"],
        "established": 1956
      },
      {
        "id": 10,
        "name": "Miranda House (duplicate avoided) — placeholder for other DU college",
        "location": "Delhi",
        "type": "Government",
        "rating": 4.6,
        "courses": ["B.Sc", "BA"],
        "cutoffs": { "B.Sc": 95.0 },
        "fees": { "B.Sc": 15000 },
        "facilities": ["Library", "WiFi"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 3000,
        "placementRate": 74,
        "topRecruiters": ["Consulting Firms", "EdTech"],
        "established": 1960
      },{
        "id": 11,
        "name": "College of Engineering Pune (COEP)",
        "location": "Maharashtra",
        "type": "Government",
        "rating": 4.7,
        "courses": ["B.Tech CSE", "B.Tech Mechanical", "M.Tech"],
        "cutoffs": { "B.Tech CSE": 97.5 },
        "fees": { "B.Tech CSE": 90000 },
        "facilities": ["Workshops", "Library", "Hostel"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 8000,
        "placementRate": 88,
        "topRecruiters": ["TCS", "Infosys", "Cummins"],
        "established": 1854
      },
      {
        "id": 12,
        "name": "Veermata Jijabai Technological Institute (VJTI)",
        "location": "Maharashtra",
        "type": "Government",
        "rating": 4.6,
        "courses": ["B.Tech CSE", "B.Tech Electrical"],
        "cutoffs": { "B.Tech CSE": 96.5 },
        "fees": { "B.Tech CSE": 84000 },
        "facilities": ["Labs", "Library", "Hostel"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 7000,
        "placementRate": 86,
        "topRecruiters": ["JNPT", "TCS", "L&T"],
        "established": 1887
      },
      {
        "id": 13,
        "name": "Institute of Chemical Technology (ICT), Mumbai",
        "location": "Maharashtra",
        "type": "Government",
        "rating": 4.6,
        "courses": ["B.Tech Chemical", "M.Tech"],
        "cutoffs": { "B.Tech Chemical": 97.0 },
        "fees": { "B.Tech Chemical": 115000 },
        "facilities": ["Research Labs", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 3500,
        "placementRate": 89,
        "topRecruiters": ["Reliance", "GSK"],
        "established": 1933
      },
      {
        "id": 14,
        "name": "Government College of Engineering, Aurangabad",
        "location": "Maharashtra",
        "type": "Government",
        "rating": 4.1,
        "courses": ["B.Tech Mechanical", "B.Tech CSE"],
        "cutoffs": { "B.Tech CSE": 92.0 },
        "fees": { "B.Tech CSE": 82000 },
        "facilities": ["Labs", "WiFi", "Hostel"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 4000,
        "placementRate": 72,
        "topRecruiters": ["Mahindra", "TCS"],
        "established": 1960
      },
      {
        "id": 15,
        "name": "Fergusson College (Public-Aided)",
        "location": "Maharashtra",
        "type": "Government-Aided",
        "rating": 4.5,
        "courses": ["B.Sc CS", "BA", "B.Com"],
        "cutoffs": { "B.Sc CS": 90.0 },
        "fees": { "B.Sc CS": 22000 },
        "facilities": ["Library", "Auditorium"],
        "mediumOfInstruction": ["English", "Marathi"],
        "totalStudents": 9000,
        "placementRate": 68,
        "topRecruiters": ["Infosys", "TCS"],
        "established": 1885
      },
      {
        "id": 16,
        "name": "Government Law College, Mumbai",
        "location": "Maharashtra",
        "type": "Government",
        "rating": 4.3,
        "courses": ["LLB", "BA LLB"],
        "cutoffs": { "LLB": 85.0 },
        "fees": { "LLB": 15000 },
        "facilities": ["Moot Court", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 3000,
        "placementRate": 65,
        "topRecruiters": ["Law Firms", "PSUs"],
        "established": 1855
      },
      {
        "id": 17,
        "name": "Savitribai Phule Pune University (Science cluster colleges)",
        "location": "Maharashtra",
        "type": "Government",
        "rating": 4.3,
        "courses": ["B.Sc", "B.Com", "BA"],
        "cutoffs": { "B.Sc Computer Science": 88.0 },
        "fees": { "B.Sc Computer Science": 18000 },
        "facilities": ["Library", "Laboratories"],
        "mediumOfInstruction": ["English", "Marathi"],
        "totalStudents": 15000,
        "placementRate": 70,
        "topRecruiters": ["Persistent", "Infosys"],
        "established": 1949
      },
      {
        "id": 18,
        "name": "Government College of Engineering, Amravati",
        "location": "Maharashtra",
        "type": "Government",
        "rating": 4.0,
        "courses": ["B.Tech CSE", "B.Tech Electrical"],
        "cutoffs": { "B.Tech CSE": 90.0 },
        "fees": { "B.Tech CSE": 78000 },
        "facilities": ["Labs", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 3800,
        "placementRate": 70,
        "topRecruiters": ["TCS", "Cognizant"],
        "established": 1964
      },
      {
        "id": 19,
        "name": "SPPU Department of Management Sciences (PUMBA)",
        "location": "Pune, Maharashtra",
        "type": "Government",
        "rating": 4.4,
        "courses": ["MBA", "BBA"],
        "cutoffs": { "MBA": 84.0 },
        "fees": { "MBA": 135000 },
        "facilities": ["Placement Cell", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 1200,
        "placementRate": 85,
        "topRecruiters": ["Deloitte", "KPMG"],
        "established": 1971
      },
      {
        "id": 20,
        "name": "Government Polytechnic, Mumbai",
        "location": "Mumbai, Maharashtra",
        "type": "Government",
        "rating": 4.0,
        "courses": ["Diploma Mechanical", "Diploma Computer"],
        "cutoffs": { "Diploma Computer": 80.0 },
        "fees": { "Diploma Computer": 12000 },
        "facilities": ["Labs", "Workshops"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 5000,
        "placementRate": 68,
        "topRecruiters": ["L&T", "Godrej"],
        "established": 1960
      },  {
        "id": 21,
        "name": "University of Mysore - Maharaja's College (constituent)",
        "location": "Mysuru, Karnataka",
        "type": "Government",
        "rating": 4.3,
        "courses": ["B.A", "B.Sc", "B.Com"],
        "cutoffs": { "B.Sc": 82.0 },
        "fees": { "B.Sc": 16000 },
        "facilities": ["Library", "Laboratory", "Heritage Building", "WiFi"],
        "mediumOfInstruction": ["English", "Kannada"],
        "totalStudents": 4500,
        "placementRate": 58,
        "topRecruiters": ["Regional Firms", "Banks"],
        "established": 1889
      },
      {
        "id": 22,
        "name": "University Visvesvaraya College of Engineering (UVCE)",
        "location": "Bengaluru, Karnataka",
        "type": "Government",
        "rating": 4.5,
        "courses": ["B.E CSE", "B.E ECE", "M.E"],
        "cutoffs": { "B.E CSE": 95.5 },
        "fees": { "B.E CSE": 65000 },
        "facilities": ["Labs", "Library", "Hostel"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 4200,
        "placementRate": 82,
        "topRecruiters": ["TCS", "Wipro", "Infosys"],
        "established": 1917
      },
      {
        "id": 23,
        "name": "RV College of Engineering (RVCE) (Govt-Aided origin)",
        "location": "Bengaluru, Karnataka",
        "type": "Government-Aided",
        "rating": 4.6,
        "courses": ["B.E CSE", "B.E ISE"],
        "cutoffs": { "B.E CSE": 96.5 },
        "fees": { "B.E CSE": 120000 },
        "facilities": ["Incubation Centre", "Library", "Hostel"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 7000,
        "placementRate": 93,
        "topRecruiters": ["Microsoft", "Amazon"],
        "established": 1963
      },
      {
        "id": 24,
        "name": "BMS College of Engineering (Govt-Aided)",
        "location": "Bengaluru, Karnataka",
        "type": "Government-Aided",
        "rating": 4.6,
        "courses": ["B.E CSE", "B.E Mechanical"],
        "cutoffs": { "B.E CSE": 96.0 },
        "fees": { "B.E CSE": 110000 },
        "facilities": ["Library", "Hostel", "Labs"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 8000,
        "placementRate": 90,
        "topRecruiters": ["SAP", "Oracle"],
        "established": 1946
      },
      {
        "id": 25,
        "name": "KLE Technological University (Govt-Aided origin cluster)",
        "location": "Hubballi, Karnataka",
        "type": "Government-Aided",
        "rating": 4.3,
        "courses": ["B.E CSE", "B.E Mechanical"],
        "cutoffs": { "B.E CSE": 94.0 },
        "fees": { "B.E CSE": 100000 },
        "facilities": ["WiFi", "Library", "Hostel"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 7000,
        "placementRate": 85,
        "topRecruiters": ["Infosys", "TCS"],
        "established": 1947
      },
      {
        "id": 26,
        "name": "Government Science College, Bengaluru",
        "location": "Bengaluru, Karnataka",
        "type": "Government",
        "rating": 4.1,
        "courses": ["B.Sc Physics", "B.Sc Chemistry", "B.Sc CS"],
        "cutoffs": { "B.Sc CS": 85.0 },
        "fees": { "B.Sc CS": 15000 },
        "facilities": ["Library", "Laboratories"],
        "mediumOfInstruction": ["English", "Kannada"],
        "totalStudents": 5000,
        "placementRate": 55,
        "topRecruiters": ["Local IT Firms"],
        "established": 1921
      },
      {
        "id": 27,
        "name": "Government Engineering College, Hassan",
        "location": "Hassan, Karnataka",
        "type": "Government",
        "rating": 4.0,
        "courses": ["B.E CSE", "B.E Civil"],
        "cutoffs": { "B.E CSE": 90.0 },
        "fees": { "B.E CSE": 60000 },
        "facilities": ["Lab", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 3000,
        "placementRate": 65,
        "topRecruiters": ["TCS", "TechM"],
        "established": 2007
      },
      {
        "id": 28,
        "name": "Government First Grade College (Bengaluru Urban cluster)",
        "location": "Bengaluru Urban, Karnataka",
        "type": "Government",
        "rating": 3.9,
        "courses": ["BA", "B.Com"],
        "cutoffs": { "B.Com": 78.0 },
        "fees": { "B.Com": 12000 },
        "facilities": ["Library", "WiFi"],
        "mediumOfInstruction": ["English", "Kannada"],
        "totalStudents": 12000,
        "placementRate": 50,
        "topRecruiters": ["Banks", "SMEs"],
        "established": 2001
      },
      {
        "id": 29,
        "name": "University of Mysore - Yuvaraja's College (Public Aided cluster)",
        "location": "Mysuru, Karnataka",
        "type": "Government-Aided",
        "rating": 4.2,
        "courses": ["B.Sc", "BA", "B.Com"],
        "cutoffs": { "B.Sc": 82.0 },
        "fees": { "B.Sc": 16000 },
        "facilities": ["Library", "Laboratory"],
        "mediumOfInstruction": ["English", "Kannada"],
        "totalStudents": 10000,
        "placementRate": 58,
        "topRecruiters": ["Regional Employers", "Banks"],
        "established": 1889
      },
      {
        "id": 30,
        "name": "Government Engineering College, Ramanagara",
        "location": "Ramanagara, Karnataka",
        "type": "Government",
        "rating": 3.9,
        "courses": ["B.E CSE", "B.E EEE"],
        "cutoffs": { "B.E CSE": 88.0 },
        "fees": { "B.E CSE": 58000 },
        "facilities": ["Labs", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 2500,
        "placementRate": 60,
        "topRecruiters": ["TCS", "Wipro"],
        "established": 2007
      },{
        "id": 31,
        "name": "IIT Madras",
        "location": "Chennai, Tamil Nadu",
        "type": "Government",
        "rating": 4.9,
        "courses": ["B.Tech", "M.Tech", "PhD"],
        "cutoffs": { "B.Tech CSE": 99.5 },
        "fees": { "B.Tech CSE": 250000 },
        "facilities": ["Research Labs", "Library", "Hostel"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 8000,
        "placementRate": 98,
        "topRecruiters": ["Google", "Microsoft", "Amazon"],
        "established": 1959
      },
      {
        "id": 32,
        "name": "Anna University (College cluster)",
        "location": "Chennai, Tamil Nadu",
        "type": "Government",
        "rating": 4.3,
        "courses": ["B.E", "B.Tech", "M.E"],
        "cutoffs": { "B.E CSE": 92.0 },
        "fees": { "B.E CSE": 80000 },
        "facilities": ["Laboratories", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 30000,
        "placementRate": 70,
        "topRecruiters": ["TCS", "Cognizant"],
        "established": 1978
      },
      {
        "id": 33,
        "name": "Government College of Technology (GCT), Coimbatore",
        "location": "Coimbatore, Tamil Nadu",
        "type": "Government",
        "rating": 4.2,
        "courses": ["B.E Mechanical", "B.E CSE"],
        "cutoffs": { "B.E CSE": 90.0 },
        "fees": { "B.E CSE": 70000 },
        "facilities": ["Labs", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 5000,
        "placementRate": 72,
        "topRecruiters": ["TCS", "L&T"],
        "established": 1945
      },
      {
        "id": 34,
        "name": "Government College of Engineering, Salem",
        "location": "Salem, Tamil Nadu",
        "type": "Government",
        "rating": 4.0,
        "courses": ["B.E CSE", "B.E Civil"],
        "cutoffs": { "B.E CSE": 85.0 },
        "fees": { "B.E CSE": 60000 },
        "facilities": ["Labs", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 3000,
        "placementRate": 60,
        "topRecruiters": ["TCS", "Wipro"],
        "established": 1966
      },
      {
        "id": 35,
        "name": "Madras Medical College (MMC)",
        "location": "Chennai, Tamil Nadu",
        "type": "Government",
        "rating": 4.4,
        "courses": ["MBBS", "MD", "MS"],
        "cutoffs": { "MBBS": 99.0 },
        "fees": { "MBBS": 20000 },
        "facilities": ["Hospital", "Labs"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 4000,
        "placementRate": 75,
        "topRecruiters": ["Hospitals", "Medical Research Institutes"],
        "established": 1835
      },
      {
        "id": 36,
        "name": "Government College of Engineering, Tirunelveli",
        "location": "Tirunelveli, Tamil Nadu",
        "type": "Government",
        "rating": 3.9,
        "courses": ["B.E CSE", "B.E EEE"],
        "cutoffs": { "B.E CSE": 84.0 },
        "fees": { "B.E CSE": 55000 },
        "facilities": ["Labs", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 2800,
        "placementRate": 58,
        "topRecruiters": ["Regional IT Firms"],
        "established": 1965
      },
      {
        "id": 37,
        "name": "King Institute of Preventive Medicine (affiliated cluster/medical)",
        "location": "Chennai, Tamil Nadu",
        "type": "Government",
        "rating": 4.0,
        "courses": ["Diploma", "PG"],
        "cutoffs": { "Diploma": 70.0 },
        "fees": { "Diploma": 8000 },
        "facilities": ["Labs", "Hospital"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 1200,
        "placementRate": 50,
        "topRecruiters": ["Health Dept", "Research Institutes"],
        "established": 1899
      },
      {
        "id": 38,
        "name": "Alagappa Government Arts College (Affiliated cluster)",
        "location": "Karaikudi, Tamil Nadu",
        "type": "Government",
        "rating": 3.8,
        "courses": ["BA", "B.Sc", "B.Com"],
        "cutoffs": { "B.Sc": 75.0 },
        "fees": { "B.Sc": 9000 },
        "facilities": ["Library"],
        "mediumOfInstruction": ["English", "Tamil"],
        "totalStudents": 5000,
                "placementRate": 45,
        "topRecruiters": ["Local Employers"],
        "established": 1947
      },
      {
        "id": 39,
        "name": "Government Arts College, Coimbatore",
        "location": "Coimbatore, Tamil Nadu",
        "type": "Government",
        "rating": 3.9,
        "courses": ["BA", "B.Sc", "B.Com"],
        "cutoffs": { "B.Sc": 76.0 },
        "fees": { "B.Sc": 9000 },
        "facilities": ["Library", "Labs"],
        "mediumOfInstruction": ["English", "Tamil"],
        "totalStudents": 6000,
        "placementRate": 50,
        "topRecruiters": ["Local Firms"],
        "established": 1852
      },
      {
        "id": 40,
        "name": "Bharathidasan University (cluster colleges - public aided)",
        "location": "Tiruchirappalli, Tamil Nadu",
        "type": "Government-Aided",
        "rating": 4.0,
        "courses": ["BA", "B.Sc", "B.Com", "M.Sc"],
        "cutoffs": { "B.Sc": 75.0 },
        "fees": { "B.Sc": 10000 },
        "facilities": ["Library", "Labs"],
        "mediumOfInstruction": ["English", "Tamil"],
        "totalStudents": 14000,
        "placementRate": 55,
        "topRecruiters": ["Regional Employers", "Banks"],
        "established": 1982
      },{
        "id": 41,
        "name": "Jadavpur University",
        "location": "Kolkata, West Bengal",
        "type": "Government-Aided",
        "rating": 4.6,
        "courses": ["B.E", "B.Sc", "BA", "M.Sc"],
        "cutoffs": { "B.E": 95.0 },
        "fees": { "B.E": 90000 },
        "facilities": ["Research Labs", "Library", "Hostel"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 9000,
        "placementRate": 82,
        "topRecruiters": ["TCS", "L&T", "Wipro"],
        "established": 1955
      },
      {
        "id": 42,
        "name": "University of Calcutta",
        "location": "Kolkata, West Bengal",
        "type": "Government",
        "rating": 4.2,
        "courses": ["BA", "B.Sc", "B.Com", "M.Sc"],
        "cutoffs": { "B.Sc": 80.0 },
        "fees": { "B.Sc": 12000 },
        "facilities": ["Library", "Research Centers"],
        "mediumOfInstruction": ["English", "Bengali"],
        "totalStudents": 36000,
        "placementRate": 60,
        "topRecruiters": ["Banks", "Regional Employers"],
        "established": 1857
      },
      {
        "id": 43,
        "name": "Presidency University (State Public University)",
        "location": "Kolkata, West Bengal",
        "type": "Government",
        "rating": 4.4,
        "courses": ["BA", "B.Sc", "B.Com"],
        "cutoffs": { "BA": 85.0 },
        "fees": { "BA": 15000 },
        "facilities": ["Library", "Laboratories"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 4000,
        "placementRate": 70,
        "topRecruiters": ["Banks", "IT Services"],
        "established": 1817
      },
      {
        "id": 44,
        "name": "Government College of Engineering & Ceramic Technology",
        "location": "Kolkata, West Bengal",
        "type": "Government",
        "rating": 4.0,
        "courses": ["B.Tech", "Diploma"],
        "cutoffs": { "B.Tech": 78.0 },
        "fees": { "B.Tech": 50000 },
        "facilities": ["Labs", "Workshops"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 2000,
        "placementRate": 55,
        "topRecruiters": ["Local Industry"],
        "established": 1941
      },
      {
        "id": 45,
        "name": "Scottish Church College (Government-Aided)",
        "location": "Kolkata, West Bengal",
        "type": "Government-Aided",
        "rating": 4.2,
        "courses": ["BA", "B.Sc", "B.Com"],
        "cutoffs": { "BA": 82.0 },
        "fees": { "BA": 15000 },
        "facilities": ["Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 2500,
        "placementRate": 50,
        "topRecruiters": ["Media", "Banks"],
        "established": 1830
      },
      {
        "id": 46,
        "name": "Kolkata Medical College (Medical College cluster)",
        "location": "Kolkata, West Bengal",
        "type": "Government",
        "rating": 4.3,
        "courses": ["MBBS", "MD", "MS"],
        "cutoffs": { "MBBS": 99.0 },
        "fees": { "MBBS": 20000 },
        "facilities": ["Hospital", "Labs"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 4000,
        "placementRate": 70,
        "topRecruiters": ["Hospitals", "Health Dept"],
        "established": 1835
      },
      {
        "id": 47,
        "name": "Maulana Azad College (Government-Aided)",
        "location": "Kolkata, West Bengal",
        "type": "Government-Aided",
        "rating": 4.0,
        "courses": ["BA", "B.Sc", "B.Com"],
        "cutoffs": { "B.Sc": 75.0 },
        "fees": { "B.Sc": 12000 },
        "facilities": ["Library"],
        "mediumOfInstruction": ["English", "Bengali"],
        "totalStudents": 6000,
        "placementRate": 45,
        "topRecruiters": ["Banks", "Local Firms"],
        "established": 1926
      },
      {
        "id": 48,
        "name": "Ramakrishna Mission Residential College (Affiliated cluster)",
        "location": "west bengal",
        "type": "Government-Aided",
        "rating": 4.3,
        "courses": ["B.Sc", "B.A"],
        "cutoffs": { "B.Sc": 80.0 },
        "fees": { "B.Sc": 10000 },
        "facilities": ["Hostel", "Library"],
        "mediumOfInstruction": ["English"],
        "totalStudents": 2000,
        "placementRate": 60,
        "topRecruiters": ["Research Institutes", "Regional Employers"],
        "established": 1942
      },
      {
        "id": 49,
        "name": "Burdwan University - Government colleges cluster",
        "location": "West Bengal",
        "type": "Government",
        "rating": 3.9,
        "courses": ["BA", "B.Sc", "B.Com"],
        "cutoffs": { "B.Sc": 70.0 },
        "fees": { "B.Sc": 9000 },
        "facilities": ["Library"],
        "mediumOfInstruction": ["English", "Bengali"],
        "totalStudents": 12000,
        "placementRate": 40,
        "topRecruiters": ["Local Employers"],
        "established": 1960
      },
      {
        "id": 50,
        "name": "West Bengal State University - Government Colleges Cluster",
        "location": "West Bengal",
        "type": "Government",
        "rating": 3.8,
        "courses": ["BA", "B.Sc", "B.Com"],
        "cutoffs": { "B.Sc": 72.0 },
        "fees": { "B.Sc": 10000 },
        "facilities": ["Library", "Labs"],
        "mediumOfInstruction": ["English", "Bengali"],
        "totalStudents": 18000,
        "placementRate": 45,
        "topRecruiters": ["Regional Employers"],
        "established": 2008
      }
  ];

  const locations = ['all',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = locationFilter === 'all' || college.location === locationFilter;
    const matchesType = typeFilter === 'all' || college.type.toLowerCase() === typeFilter.toLowerCase();
    
    return matchesSearch && matchesLocation && matchesType;
  });

  const getFacilityIcon = (facility: string) => {
    switch (facility.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'library': return <Book className="h-4 w-4" />;
      case 'hostel': return <Home className="h-4 w-4" />;
      case 'laboratory': return <Award className="h-4 w-4" />;
      default: return <Award className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">College Directory</h1>
          <p className="text-gray-600">
            Find the best government colleges near you with detailed information
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search colleges or courses..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                className="flex-1 border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
              <select
                className="flex-1 border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="government">Government</option>
                <option value="private">Private</option>
                <option value="all">All Types</option>
              </select>
            </div>
          </div>
        </div>

        {/* College Cards */}
        <div className="space-y-6">
          {filteredColleges.map(college => (
            <div key={college.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{college.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        college.type === 'Government' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {college.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{college.location}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">Est. {college.established}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-medium">{college.rating}</span>
                      <span className="text-gray-500 text-sm ml-2">
                        ({college.totalStudents.toLocaleString()} students)
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {college.placementRate}% Placement Rate
                    </div>
                  </div>
                </div>

                {/* Courses and Fees */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Popular Courses</h4>
                    <div className="space-y-2">
                      {college.courses.slice(0, 4).map((course, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-gray-700">{course}</span>
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-900">
                              ₹{college.fees[course]?.toLocaleString() || 'N/A'}
                            </div>
                            <div className="text-xs text-gray-500">
                              Cut-off: {college.cutoffs[course] || 'N/A'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Facilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {college.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          {getFacilityIcon(facility)}
                          <span className="ml-2">{facility}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Top Recruiters</h5>
                      <div className="flex flex-wrap gap-1">
                        {college.topRecruiters.slice(0, 3).map((recruiter, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {recruiter}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    View Detailed Information
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
                    Add to Shortlist
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No colleges found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}