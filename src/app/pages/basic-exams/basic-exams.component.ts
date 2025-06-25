import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-basic-exams',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basic-exams.component.html',
  styleUrl: './basic-exams.component.scss'
})
export class BasicExamsComponent {

  extraordinary: string = 'extraordinary';
  first: string = 'first';
  second: string = 'second';

  selectedYear: number | null = null;
  selectedSubject: string = '';
  selectedTerm: string = '';
  selectedGrade: string=''


  basicExamsList = [
    //Portuguese
    { subject: 'Portuguese', year: 2011, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/portugues/Portugues-10-2011-1.pdf' },
    { subject: 'Portuguese', year: 2012, term: 'first', grade: '10', link: 'https://dannyboycuna.github.io/examesmoz/10classe/portugues/portugues-10-2012-1.pdf' },
    { subject: 'Portuguese', year: 2013, term: 'first', grade: '10', link: 'https://dannyboycuna.github.io/examesmoz/10classe/portugues/Portugues-10-2013-1.pdf' },
    { subject: 'Portuguese', year: 2014, grade: '10', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/10classe/portugues/Portugues-10-2014-2.pdf' },
    { subject: 'Portuguese', year: 2014, term: 'extraordinary', grade: '10', link: 'https://dannyboycuna.github.io/examesmoz/10classe/portugues/Portugues-10-2014-extra.pdf' },
    { subject: 'Portuguese', year: 2023, term: 'first', grade: '12', link: 'https://drive.google.com/file/d/1X_oVNv5NrE3BgiciSGJjc6hi6X-uwpvG/view?usp=sharing' },

    { subject: 'Mathematics', year: 2023, term: 'first', grade: '12', link: 'https://drive.google.com/file/d/1L2sTXDQM5zvhHBE3EQx_ox1RDCy9ZxHs/view?pli=1' },



    //Maths
    { subject: 'Mathematics', year: 2011, term: 'first', grade: '10', link: 'https://dannyboycuna.github.io/examesmoz/10classe/matematica/Matematica-10-2011-2.pdf' },
    { subject: 'Mathematics', year: 2012, term: 'second', grade: '10', link: 'https://dannyboycuna.github.io/examesmoz/10classe/matematica/Matematica-10-2012-2.pdf' },
    { subject: 'Mathematics', year: 2013, term: 'second', grade: '10', link: 'https://dannyboycuna.github.io/examesmoz/10classe/matematica/Matematica-10-2013-2.pdf' },
    { subject: 'Mathematics', year: 2014, term: 'first', grade: '10', link: 'https://dannyboycuna.github.io/examesmoz/10classe/matematica/Matematica-10-2014-1.pdf' },
    { subject: 'Mathematics', year: 2014, term: 'second', grade: '10', link: 'https://dannyboycuna.github.io/examesmoz/10classe/matematica/Matematica-10-2014-2.pdf' },



    //iology
    { subject: 'Biology', year: 2011, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/biologia/Biologia-10-2011-1.pdf' },
    { subject: 'Biology', year: 2012, grade: '10', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/10classe/biologia/Biologia-10-2012-2.pdf' },
    { subject: 'Biology', year: 2013, grade: '10', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/10classe/biologia/Biologia-10-2013-%20Extra.pdf' },
    { subject: 'Biology', year: 2013, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/biologia/Biologia-10-2013-1.pdf' },
    { subject: 'Biology', year: 2014, grade: '10', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/10classe/biologia/Biologia-10-2014-extra.pdf' },


    //Quemistry
    { subject: 'Quemistry', year: 2011, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/quimica/Quimica-10-2011-1.pdf' },
    { subject: 'Quemistry', year: 2012, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/quimica/Quimica-10-2012-1.pdf' },
    { subject: 'Quemistry', year: 2013, grade: '10', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/10classe/quimica/Quimica-10-2013-2.pdf' },
    { subject: 'Quemistry', year: 2013, grade: '10', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/10classe/quimica/Quimica-2013-Extra.pdf' },

    //Physics
    { subject: 'Physics', year: 2011, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/fisica/Fisica-10-2011-1.pdf' },
    { subject: 'Physics', year: 2011, grade: '10', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/10classe/fisica/Fisica-10-2011-2.pdf' },
    { subject: 'Physics', year: 2012, grade: '10', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/10classe/fisica/fisica-10-2012-2.pdf' },
    { subject: 'Physics', year: 2013, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/fisica/Fisica10-2013-1.pdf' },
    { subject: 'Physics', year: 2013, grade: '10', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/10classe/fisica/Fisica-10-2013-2.pdf' },
    { subject: 'Physics', year: 2014, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/fisica/Fisica-10-2014-1.pdf' },
    { subject: 'Physics', year: 2014, grade: '10', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/10classe/fisica/Fisica-10-2014-2.pdf' },
    { subject: 'Physics', year: 2014, grade: '10', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/10classe/fisica/Fisica-10-2014-extra.pdf' },
    { subject: 'English', year: 2013, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/ingles/Ingles-10-2013-1.pdf' },
    { subject: 'English', year: 2013, grade: '10', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/10classe/ingles/Ingles-10-2013-2.pdf' },
    { subject: 'English', year: 2014, grade: '10', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/10classe/ingles/Ingles-10-2014-2.pdf' },
    { subject: 'English', year: 2014, grade: '10', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/10classe/ingles/Ingles-10-2014-exxtra.doc' },
    { subject: 'History', year: 2011, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/historia/Historia-10-2011-1.pdf' },
    { subject: 'History', year: 2011, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/historia/Historia%2010CL%201EP%202011_Guiao.pdf' },
    { subject: 'History', year: 2012, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/historia/Hist%C3%B3ria-10-2012-1.pdf' },
    { subject: 'History', year: 2012, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/historia/Hist%C3%B3ria_Guia_10cla_1%C2%AA%C3%A9p%202012.pdf' },
    { subject: 'History', year: 2012, grade: '10', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/10classe/historia/Hist%C3%B3ria_Guia_10cla_2%C2%AA%C3%A9p%202012.pdf' },
    { subject: 'History', year: 2013, grade: '10', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/10classe/historia/Hist%C3%B3ria-10-2013-Extra.pdf' },
    { subject: 'History', year: 2014, grade: '10', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/10classe/historia/Historia-10-2014-extra.pdf' },
    { subject: 'History', year: 2014, grade: '10', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/10classe/historia/historia-2014-1.pdf' },
    { subject: 'History', year: 2014, grade: '10', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/10classe/historia/Historia-10-2014-2.pdf' },

    /////Grade 12
    { subject: 'Portuguese', year: 2011, grade: '12', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20portugues/portugues-2011-1.pdf' },
    { subject: 'Portuguese', year: 2011, grade: '12', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20portugues/Portugues%201%C2%AA%20%C3%89poca%2012%C2%AA%20Classe%202011_Guiao.pdf' },
    { subject: 'Portuguese', year: 2011, grade: '12', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20portugues/Portugues-2011-2.pdf' },
    { subject: 'Portuguese', year: 2011, grade: '12', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20portugues/Portugues%202%C2%AA%20%C3%89poca%2012%C2%AA%20Classe%202011_Guiao.pdf' },
    { subject: 'Portuguese', year: 2013, grade: '12', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20portugues/Portugues-2013-Extra.pdf' },
    { subject: 'Portuguese', year: 2013, grade: '12', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20portugues/Guia%20Portugu%C3%AAs%2012%C2%AA%20cl%202013-Extra.pdf' },
    { subject: 'Portuguese', year: 2013, grade: '12', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20portugues/Portugues-2013-1.pdf' },
    { subject: 'Portuguese', year: 2013, grade: '12', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20portugues/Portugues-2013-2.pdf' },
    { subject: 'Portuguese', year: 2014, grade: '12', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20portugues/portugues-2014-ext.pdf' },
    { subject: 'Portuguese', year: 2014, grade: '12', term: 'extraordinry', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20portugues/Guia%20Portugues%20Extraord.%2012%C2%AAclas%202014.pdf' },
    { subject: 'Portuguese', year: 2019, grade: '12', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20portugues/Exame%20de%20l%C3%ADngua%20Portuguesa%20%2012%C2%AA%20classe%201%C2%AA%20%C3%A9poca%202019.pdf' },

    //////Mathematics
    { subject: 'Mathematics', year: 2011, grade: '12', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/matematica-2011-1.pdf' },
    { subject: 'Mathematics', year: 2011, grade: '12', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/matematica-2011-2.pdf' },
    { subject: 'Mathematics', year: 2012, grade: '12', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/matematica-2012-1.pdf' },
    { subject: 'Mathematics', year: 2012, grade: '12', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/matematica-2012-2.pdf' },
    { subject: 'Mathematics', year: 2013, grade: '12', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/matematica-2013-ext.pdf' },
    { subject: 'Mathematics', year: 2013, grade: '12', term: 'first', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/matematica-2013-1.pdf' },
    { subject: 'Mathematics', year: 2013, grade: '12', term: 'second', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/matematica-2013-2.pdf' },
    { subject: 'Mathematics', year: 2014, grade: '12', term: 'extraordinary', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/matematica-2014-ext.pdf' },
    { subject: 'Mathematics', year: 2014, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/matematica-2014-1.pdf' },
    { subject: 'Mathematics', year: 2014, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/matematica-2014-2.pdf' },
    { subject: 'Mathematics', year: 2015, grade: '12', term: `${this.extraordinary}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/EXAME%20%20EXTRAORDIN%C3%81RIO%20MATEM%C3%81TICA%2012%20CLASSE%202015.pdf' },
    { subject: 'Mathematics', year: 2016, grade: '12', term: `${this.extraordinary}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/EXAME%20EXTRAORDIN%C3%81RIO%20%20MATEM%C3%81TICA%202016%2012%20CLASSE%20.pdf' },
    { subject: 'Mathematics', year: 2018, grade: '12', term: `${this.extraordinary}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/EXAME%20EXTRAORDIN%C3%81RIO%20MATEM%C3%81TICA%2012%C2%AA%20CLASSE%202018.pdf' },
    { subject: 'Mathematics', year: 2019, grade: '12', term: `${this.extraordinary}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/Exame%20de%20Matematica%2012%C2%AA%20CLASSE%201%C2%AA%20%C3%A9poca%202019.pdf' },
    { subject: 'Mathematics', grade: '12', link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20matematica/FAZER_EXAME_COM_CERTEZA.pdf' },
    { subject: 'Biology', year: 2011, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20biologia/biologia-2011-1.pdf' },
    { subject: 'Biology', year: 2011, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20biologia/biologia-2011-2.pdf' },
    { subject: 'Biology', year: 2012, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20biologia/biologia-2012-1.pdf' },
    { subject: 'Biology', year: 2012, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20biologia/biologia-2012-2.pdf' },
    { subject: 'Biology', year: 2013, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20biologia/biologia-2013-1.pdf' },
    { subject: 'Biology', year: 2013, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20biologia/biologia-2013-2.pdf' },
    { subject: 'Biology', year: 2014, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20biologia/biologia-2014-1.pdf' },
    { subject: 'Biology', year: 2014, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20biologia/biologia-2014-2.pdf' },

    ////////////Quemistry//////////////
    { subject: 'Quemistry', year: 2011, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/quimica/Quimica%20-2011-1.pdf' },
    { subject: 'Quemistry', year: 2013, grade: '12', term: `${this.extraordinary}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/quimica/Quimica-2013-Extra.pdf' },
    { subject: 'Quemistry', year: 2013, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/quimica/Quimica-2013-1.pdf' },


    /////////////////Physics//////////////////////

    { subject: 'Physics', year: 2011, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20fisica/fisica-2011-1.pdf' },
    { subject: 'Physics', year: 2011, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20fisica/fisica-2011-2.pdf' },
    { subject: 'Physics', year: 2012, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20fisica/F%C3%ADsica-2012-1.pdf' },
    { subject: 'Physics', year: 2012, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20fisica/F%C3%ADsica-2012-2.pdf' },
    { subject: 'Physics', year: 2013, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20fisica/Fisica-2013-2.pdf' },
    { subject: 'Physics', year: 2019, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20fisica/Exame%20de%20Fisica%20%201%C2%AA%20%C3%A9poca%202019.pdf' },


    ///////Enlish////////
    { subject: 'English', year: 2012, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20ingles/ingles-2012-1.pdf' },
    { subject: 'English', year: 2012, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20ingles/Ingles-2012-2.pdf' },
    { subject: 'English', year: 2013, grade: '12', term: `${this.extraordinary}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20ingles/Ingles-2013-Extra.pdf' },
    { subject: 'English', year: 2013, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20ingles/Ingles-2013-1.pdf' },
    { subject: 'English', year: 2014, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20ingles/Ingles-2014-1.pdf' },
    { subject: 'English', year: 2014, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20ingles/Ingles-2014-2.pdf' },
    { subject: 'English', year: 2019, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20ingles/Exame%20de%20l%C3%ADngua%20Inglesa%20%2012%C2%AA%20classe%201%C2%AA%20%C3%A9poca%202019.pdf' },


    /////////////////History////////////////////
    { subject: 'History', year: 2011, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20historia/historia-2011-1.pdf' },
    { subject: 'History', year: 2011, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20historia/historia-2011-2.pdf' },
    { subject: 'History', year: 2012, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20historia/historia-2012-1.pdf' },
    { subject: 'History', year: 2012, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20historia/historia-2012-2.pdf' },
    { subject: 'History', year: 2014, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20historia/historia-2014-1.pdf' },
    { subject: 'History', year: 2014, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20historia/historia-2014-2.pdf' },
    { subject: 'History', year: 2019, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20historia/Exame%20de%20Historia%20%2012%C2%AA%20classe%201%C2%AA%20%C3%A9poca%202019.pdf' },
    /////////////////////

    { subject: 'Phylosophy', year: 2011, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20filosofia/filosofia-2011-1.pdf' },
    { subject: 'Phylosophy', year: 2012, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20filosofia/filosofia-2012-1.pdf' }, { subject: 'Phylosophy', year: 2012, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20filosofia/filosofia-2012-2.pdf' },
    { subject: 'Phylosophy', year: 2013, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20filosofia/filosofia-2013-1.pdf' },
    { subject: 'Phylosophy', year: 2013, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20filosofia/filosofia-2013-2.pdf' },
    { subject: 'Phylosophy', year: 2013, grade: '12', term: `${this.extraordinary}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20filosofia/filosofia-2013-Ext.pdf' }, { subject: 'Phylosophy', year: 2019, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20filosofia/Exame%20de%20Introducao%20a%20Filosofia%20%201%C2%AA%20%C3%A9poca%202019.pdf' },
    ///////////////////////////

    { subject: 'Drawing', year: 2011, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20desenho/desenho-2011-1.pdf' },
    { subject: 'Drawing', year: 2011, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20desenho/desenho-2011-2.pdf' },
    { subject: 'Drawing', year: 2012, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20desenho/desenho-2012-1.pdf' },
    { subject: 'Drawing', year: 2012, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20desenho/desenho-2012-2.pdf' },
    { subject: 'Drawing', year: 2013, grade: '12', term: `${this.extraordinary}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20desenho/desenho-2013-Ext.pdf' },
    { subject: 'Drawing', year: 2013, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20desenho/desenho-2013-1.pdf' },
    { subject: 'Drawing', year: 2013, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20desenho/desenho-2013-2.pdf' },
    { subject: 'Drawing', year: 2014, grade: '12', term: `${this.extraordinary}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20desenho/desenho-2014-ext.pdf' },
    { subject: 'Drawing', year: 2014, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20desenho/desenho-2014-1.pdf' },
    { subject: 'Drawing', year: 2014, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20desenho/desenho-2014-2.pdf' },

    ////////////French/////////////

    { subject: 'French', year: 2011, grade: '12', term: `${this.first}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20frances/frances-2011-1.pdf' },
    { subject: 'French', year: 2012, grade: '12', term: `${this.second}`, link: 'https://dannyboycuna.github.io/examesmoz/12classe/exames%20de%20frances/frances-2011-2.pdf' }
  ]


  get filteredExams() {
    if (!this.selectedTerm && !this.selectedSubject && !this.selectedYear && !this.selectedGrade) {
      return []
    }

    return this.basicExamsList.filter(item => {
      const matchYear = this.selectedYear ? item.year === this.selectedYear : true;

      const matchGrade = this.selectedGrade ? item.grade === this.selectedGrade : true;

      const matchTerm = this.selectedTerm ? item.term === this.selectedTerm : true;

      const matchSubject = this.selectedSubject ? item.subject === this.selectedSubject : true;

      return matchTerm && matchSubject && matchYear && matchGrade
    })
  }

}
