import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isSkillOpen: boolean = false;


  constructor(private titleService:Title, private renderer: Renderer2){
    this.titleService.setTitle('Akshat Choudhary - Resume')
  }
  currentSkill: string = '';

showSkillInfo(skill: string) {
    this.currentSkill = skill;
}

hideSkillInfo() {
    this.currentSkill = '';
}


  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', 'blank')
    link.setAttribute('href','../../assets/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();
  }
}
