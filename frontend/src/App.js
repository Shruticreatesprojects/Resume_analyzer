import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>RESUME MASTER <span>AI</span></h1>

        <div className="header-right">
          <span>🔔</span>
          <span>👤</span>
        </div>
      </header>


      {/* Main Layout */}
      <div className="main-container">

        {/* Sidebar */}
        <aside className="sidebar">

          <div className="menu-item active">
            📊 Dashboard
          </div>

          <div className="menu-item">
            📤 Upload Resume
          </div>

          <div className="menu-item">
            📈 Analytics
          </div>

          <div className="menu-item">
            🎤 Interview
          </div>

          <div className="menu-item">
            ⚙️ Settings
          </div>

          <div className="menu-item">
            👤 Profile
          </div>

        </aside>


        {/* Content */}
        <main className="content">

          <h2>AI Resume Analyzer</h2>

          <p className="subtitle">
            Analyze your resume and compare it with your dream job.
          </p>


          {/* Input Section */}
          <section className="upload-section">

            <div className="input-card">

              <h3>Upload Your Resume</h3>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
              />

              <button>
                Analyze Resume
              </button>

            </div>


            <div className="input-card">

              <h3>Job Description</h3>

              <textarea
                placeholder="Paste the job description here..."
              ></textarea>

              <button>
                Compare Resume
              </button>

            </div>

          </section>


          {/* Match Score */}
          <section className="score-card">

            <h3>Resume Match Score</h3>

            <div className="score">
              88%
            </div>

            <p>
              Your resume is a good match for this job.
            </p>

          </section>


          {/* Analysis Cards */}
          <section className="analysis-grid">

            <div className="analysis-card">
              <h3>ATS Compatibility</h3>
              <h2>92%</h2>
              <p>Good</p>
            </div>

            <div className="analysis-card">
              <h3>Keyword Optimization</h3>
              <h2>14</h2>
              <p>Missing Keywords</p>
            </div>

            <div className="analysis-card">
              <h3>Format & Grammar</h3>
              <h2>3</h2>
              <p>Minor Errors</p>
            </div>

            <div className="analysis-card">
              <h3>AI Interview</h3>
              <p>
                Practice interview questions based on your selected job.
              </p>

              <button>
                Start Interview
              </button>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default App;