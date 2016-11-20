﻿import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthGuard } from './authguard.service'

@NgModule({
	imports: [
		CommonModule
	],
	providers: [
		AuthGuard
	]
})
export class CoreModule {

	constructor(
		@Optional() @SkipSelf() parentModule: CoreModule) {

		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
		}
	}

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [ AuthGuard ]
		};
	}
}