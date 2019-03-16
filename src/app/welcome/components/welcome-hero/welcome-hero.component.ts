import { Component, OnInit } from "@angular/core";
import {
  faSearch,
  faUsers,
  faComment,
  faComments
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "sn-welcome-hero",
  templateUrl: "./welcome-hero.component.html",
  styleUrls: ["./welcome-hero.component.scss"]
})
export class WelcomeHeroComponent {
  rows = [
    { id: 1, icon: faSearch, message: "Find people like you" },
    { id: 2, icon: faUsers, message: "Build you firends network" },
    { id: 3, icon: faComments, message: "Keep in touch" }
  ];
}
