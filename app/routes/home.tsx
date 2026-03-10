import Navbar from "components/Navbar";
import type { Route } from "./+types/home";
import { ArrowRight, ArrowUp, Clock, Layers } from "lucide-react";
import Button from "components/ui/Button";
import Upload from "components/Upload";
import {useNavigate} from "react-router";
import {useRef, useState} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Roomify" },
    { name: "description", content: "Welcome to Roomify!" },
  ];
}

export default function Home() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState<[]>([]);
    const isCreatingProjectRef = useRef(false);

    const handleUploadComplete = async (base64Image: string) => {
      const newId = Date.now().toString();

      navigate(`/visualizer/${newId}`);
      return true
    }

  return (
    <div className="home">
      <Navbar/>

      <section className="hero">
        <div className="announce">
          <div className="dot">
            <div className="pulse"/>
          </div>
          <p>Introducing Roomify 1.0</p>
        </div>
        <h1>Build Beautiful Spaces at the Speed of Thought with Roomify</h1>
        <p className="subtitle">
          Roomify is an AI-first design environment that helps you visualize, render, and ship architectural projects faster  than ever.
        </p>

        <div className="actions">
          <a href="#upload" className="cta">
            Start Building <ArrowRight className="icon"/>
          </a>

          <Button
            variant="outline"
            size="lg"
            className="demo"
          >
            Watch Demo
          </Button>
        </div>

        <div 
          id="upload"
          className="upload-shell"
        >
          <div className="grid-overlay " />
          <div className="upload-card">
            <div className="upload-head">
              <div className="upload-icon">
                <Layers className="icon"/>
              </div>
              <h3>Upload your floor plan</h3>
              <p>Supports PNG, JPEG, formats up to 10 MB</p>
            </div>
            <Upload onComplete={handleUploadComplete}/>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="copy">
              <h2>Projects</h2>
              <p>Your Latest Work and shared community projects</p>
            </div>
          </div>
          <div className="projects-grid">
            <div className="project-card group">
              <div className="preview">
                <img src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png" alt="Project 1"/>

                <div className="badge">
                  <span>Community</span>
                </div>
              </div>
              <div className="card-body">
                <div>
                  <h3>Project Manhatan</h3>

                  <div className="meta">
                    <Clock size={10}/>

                    <span>{new Date('1.1.2026').toLocaleDateString()}</span>

                    <span>by John Doe</span>
                  </div>
                </div>
                <div className="arrow">
                  <ArrowUp size={18}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
);
}
