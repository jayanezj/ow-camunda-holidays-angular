import { Component, Input, OnInit } from '@angular/core';

import { I18nService } from './i18n.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  @Input() icon = false;

  constructor(private i18nService: I18nService) {}

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  ngOnInit() {}

  setLanguage(language: string) {
    this.i18nService.language = language;
  }
}