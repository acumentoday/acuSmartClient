import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { HeaderService } from '../header/header.service';
import { SearchResponse, SearchData } from '../header/header.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileStatus : string = "Edit Profile";
  constructor(private profileService: ProfileService, private headerService: HeaderService) {}
  ngOnInit(){}



}
