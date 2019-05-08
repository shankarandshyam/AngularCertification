import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { ConstructionComponent } from './construction/construction.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: 'dashboard', component: AdminDashboardComponent, data: { breadcrumb: 'Dashboard', helptext:{heading:'Dashboard', text:'This section provides summary of the trends & activity statistics'} } },
            { path: 'candidates', loadChildren: './pages/candidates/candidates.module#CandidatesModule', data: { breadcrumb: 'Candidates', helptext:{heading:'Candidates', text:'You can add and manage candidates here'} } },
            { path: 'users', loadChildren: './pages/users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
            { path: 'ui', loadChildren: './pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'form-controls', loadChildren: './pages/form-controls/form-controls.module#FormControlsModule', data: { breadcrumb: 'Form Controls' } },
            { path: 'tables', loadChildren: './pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'icons', loadChildren: './pages/icons/icons.module#IconsModule', data: { breadcrumb: 'Material Icons' } },
            { path: 'drag-drop', loadChildren: './pages/drag-drop/drag-drop.module#DragDropModule', data: { breadcrumb: 'Drag & Drop' } },
            { path: 'schedule', loadChildren: './pages/schedule/schedule.module#ScheduleModule', data: { breadcrumb: 'Schedule' } },
            //{ path: 'system', loadChildren: './pages/system/system.module#SystemModule', data: { breadcrumb: 'System' } },
            //{ path: 'control', loadChildren: './pages/control/control.module#ControlModule', data: { breadcrumb: 'Control' } },
            { path: 'process', loadChildren: './pages/process/process.module#ProcessModule', data: { breadcrumb: 'Process' } },
            //{ path: 'predictive', loadChildren: './pages/predictiveanalytics/predictiveanalytics.module#PredictiveanalyticsModule', data: { breadcrumb: 'Predictive' } },
            // { path: 'underconstruction', component:ConstructionComponent, data: { breadcrumb: 'Under Construction' } },
            { path: 'calendar', component: CalenderComponent, data:{ breadcrumb: 'Calendar', helptext:{heading:'Calendar', text:'This section provides the summary of events scheduled in a calendar'}}},
            
            { path: 'mailbox', loadChildren: './pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
            { path: 'chat', loadChildren: './pages/chat/chat.module#ChatModule', data: { breadcrumb: 'Chat' } },
            // { path: 'maps', loadChildren: './pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: './pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: './pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' }  },          
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            {path:'adminsettings', loadChildren:'./pages/admin-settings/admin-settings.module#AdminSettingsModule', data:{breadcrumb:'Admin'}}
        ]
    },
    { path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
});