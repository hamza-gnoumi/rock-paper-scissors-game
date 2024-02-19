import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent implements OnInit {

  userChoice;
  nbr: number = 0;
  play = false;
  winners;
  result = '';
  @Output()
  score = new EventEmitter<number>();
  paper = {
    title: 'paper',
    imgSource: '../../../assets/images/icon-paper.svg',
    alt: "icon-paper"
  };
  rock = {
    title: 'rock',
    imgSource: '../../../assets/images/icon-rock.svg',
    alt: "icon-rock"
  };
  scissors = {
    title: 'scissors',
    imgSource: '../../../assets/images/icon-scissors.svg',
    alt: "icon-scissors"
  }
  chosen = this.rock;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.userChoice = this.route.snapshot.paramMap.get('yours');

    this.nbr = this.getRandomInt(3);
    this.show;
  }

  getRandomInt(max: number) {
    const ran = Math.ceil(Math.random() * max);
    return ran;
  }




  show =
    setTimeout(() => {
      this.play = true;
      this.chosen = this.nbr == 1 ? this.paper : this.nbr == 2 ? this.rock : this.scissors;
      this.game(this.userChoice);
    }, 3000);

  game(yourChoice) {
    if ((yourChoice === "rock" && this.chosen.title === "scissors") || (yourChoice === "paper" && this.chosen.title === "rock") || (yourChoice === "scissors" && this.chosen.title === "paper")) {
      this.winners = 'you';
      this.score.emit(1);
      this.result = 'You Win'
    }
    else if ((yourChoice === "scissors" && this.chosen.title === "rock") || (yourChoice === "rock" && this.chosen.title === "paper") || (yourChoice === "paper" && this.chosen.title === "scissors")) {
      this.winners = 'computer';
      this.score.emit(-1);
      this.result = 'You Lose'
    }
    else {
      this.result = 'Draw'
    }
  }



}

