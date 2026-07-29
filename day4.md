Day 1 – Project Planning
Project Idea

Develop an AI-Based Resume Analyzer that allows users to upload their resumes and receive an analysis based on resume quality,
extracted skills, ATS compatibility, and suggestions for improvement.

Objectives

Analyze uploaded resumes.
Extract resume text from PDF files.
Display resume analysis results.
Build a simple and user-friendly interface.

Technologies Selected

Python
Django
HTML
CSS
PyPDF2
SQLite Database
Git & GitHub

Work Completed

Finalized project topic.
Selected technology stack.
Created GitHub repository.
Planned project modules.
Assigned team responsibilities.

Day 2 – Project Setup

Folder Structure
AI_Resume_Analyzer/
│
├── resume_analyzer/
├── resumes/
├── templates/
│   ├── upload.html
│   └── result.html
├── static/
│   ├── css/
│   └── images/
├── media/
├── db.sqlite3
├── manage.py
└── requirements.txt

Work Completed

Installed Django.
Created Django project.
Created application.
Configured templates.
Configured static files.
Configured media folder.
Connected SQLite database.

Day 3 – Resume Upload and Analysis

Features Completed

Resume upload page created.
PDF upload support added.
Resume saved to database.
PDF text extraction using PyPDF2.
Resume text displayed successfully.
Result page created.

Tools Used

Tool
Purpose
Django
Backend Framework
HTML
Web Page Structure
CSS
User Interface Design
PyPDF2
Extract Text from PDF
SQLite
Database
GitHub
Version Control

Backend Flow

User Uploads Resume
        ↓
Upload Form Submitted
        ↓
Django View Receives Request
        ↓
Resume Saved in Database
        ↓
PyPDF2 Extracts PDF Text
        ↓
Resume Text Processed
        ↓
Analysis Result Generated
        ↓
Result Sent to Frontend
        ↓
User Sees Analysis Report

System Workflow

User opens the website.
User selects a resume (PDF).
User clicks the Analyze button.
Django receives the uploaded file.
Resume is stored in the database.
PyPDF2 extracts text from the PDF.
The extracted content is analyzed.
Results are generated.
The analysis report is displayed on the result page.

Screenshots to Include

Home Page
Resume Upload Page
Upload Successful Page
Analysis Result Page
Django Admin Panel
Database Entries (Optional)

Presentation Explanation

What happens when the user clicks Analyze?
The selected resume is uploaded.
Django receives the file.
The resume is saved in the database.
PyPDF2 extracts text from the PDF.
The system processes the extracted information.
Resume analysis is performed.
The final report is displayed on the screen.

Benefits

Saves recruiters' time.
Quick resume evaluation.
Easy to use.
Digital document management.
Provides instant feedback.
Improves resume quality.

Future Enhancements

AI-powered ATS score.
Job Description Matching.
Skill Gap Analysis.
Career Recommendations.
Dashboard and Analytics.
User Login System.
Resume History.

Conclusion

The AI-Based Resume Analyzer provides an efficient way to analyze resumes by extracting text from PDF files and presenting useful insights. The project demonstrates practical use of Django, HTML, CSS, PyPDF2, and database integration while providing a strong foundation for future AI-based enhancements.
