import {Component, Input, OnInit} from '@angular/core';
import {CandidateService} from '../../service/candidate/candidate.service';
import {ActivatedRoute} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['./experience-modal.component.css'],
  providers: [CandidateService]
})
export class ExperienceModalComponent implements OnInit {

  @Input()
  refModal = BsModalRef;

  experience = {};

  constructor(private candidateService: CandidateService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  addExperience(experience) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.candidateService.addExperience(id, experience).subscribe(
      error => console.log(error));
    window.location.reload();
  }

}
