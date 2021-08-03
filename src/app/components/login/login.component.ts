import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router, RouterModule } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(public dialog: MatDialog, private route: Router) {}
  hide = true;
  invalid = false;
  loginData = new FormGroup({
    phoneNo: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    password: new FormControl("", Validators.required),
  });

  registerData = new FormGroup({
    phoneNo: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    password: new FormControl("", Validators.required),
    retypepassword: new FormControl("", Validators.required),
  });
  login() {
    console.log(this.loginData.value, this.loginData.valid);
    if (this.loginData.valid) this.invalid = true;
    else this.invalid = false;
    if (this.loginData.valid) {
      this.route.navigateByUrl(`/user/projects`);
      localStorage.setItem("user", "true");
    }
  }

  register() {
    console.log(this.loginData.valid &&  this.loginData.value.password == this.loginData.value.retypepassword)
    if (this.loginData.valid &&  this.loginData.value.password == this.loginData.value.retypepassword ) {
      alert("Your registration was successfull")
    }
  }
  ngOnInit(): void {}
}
