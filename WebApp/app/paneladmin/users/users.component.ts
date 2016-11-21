﻿import { Component, OnInit } from '@angular/core';

import { PanelAdminService } from '../paneladmin.service';
import { PageTitleService } from '../../core/pagetitle.service';

@Component({
    templateUrl: 'app/paneladmin/users/users.component.html'
})
export class PanelAdminUsersComponent implements OnInit {

    constructor(
        private panelAdminService: PanelAdminService,
        private pageTitleService: PageTitleService) { }

    ngOnInit(): void {
        this.pageTitleService.name.next("Panel Admin - Users");
    }
}