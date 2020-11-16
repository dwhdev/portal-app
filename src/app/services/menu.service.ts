import { Injectable } from '@angular/core';
import { MenuModel } from '../models/menu.model';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    public menuList: MenuModel[] = [{
        name: 'Requerimientos',
        path: 'requirements',
        icon: 'chrome_reader_mode',
        submenus: [{
            name: 'Requerimientos',
            path: 'requirement',
            items: [
                { name: 'Cola de Desarrolladores', path: 'dev-queue' },
                { name: 'Prioridad de Requerimientos', path: 'dev-time' },
                { name: 'Cola de Trabajo', path: 'job-queue' },
            ]
        }, {
            name: 'Paso a Producción',
            path: 'deployment'
        }]
    }, {
        name: 'Configuración',
        path: 'configurations',
        icon: 'settings',
        submenus: [{
            name: 'Opciones de Ususarios',
            path: 'users',
            items: [
                { name: 'Solicitud de Permisos', path: 'request' },
                { name: 'Aprobación de Solicitud de Permisos', path: 'approvals' },
                { name: 'Permisos por Perfil', path: 'access-profile' },
                { name: 'Permisos por Usuarios', path: 'access-user' },
            ]
        }, {
            name: 'Seguridad',
            path: 'admin',
            items: [
                { name: 'Administración de Cubos', path: 'cubes' },
                { name: 'Administración de Usuarios', path: 'users' },
                { name: 'Bitácora de Acciones', path: 'logs' },
                { name: 'Tipos de Usuarios', path: 'user-types' },
                { name: 'Administración de Perfiles', path: 'profiles' },
                { name: 'Log de Accesos al Portal de DWH', path: 'access-log' },
            ]
        }]
    }, {
        name: 'DWH',
        path: 'dwh',
        icon: 'view_quilt',
        submenus: [{
            name: 'Monitoreo de Tiempo Aire',
            path: 'air-time',
            items: [
                { name: 'Tendencia Interconexión', path: 'ix-trends' },
                { name: 'Tendencia Tiempo Aire', path: 'air-trends' },
                { name: 'Monitoreo Flujos DWH', path: 'monitoring' },
                { name: 'Bitácora de Fallas DWH-NOC', path: 'failure-log' },
            ]
        }, {
            name: 'Miscelaneos',
            path: 'misc',
            items: [
                { name: 'Carga Archivo Excel', path: 'load-file' },
                { name: 'Gráficos Estadísticos', path: 'graph-stat' },
                { name: 'Parametrización Carga', path: 'load-parameter' },
                { name: 'KPI DWH', path: 'kpi' },
            ]
        }, {
            name: 'Reportes de Fallas DWH', path: 'faild-report'
        }, {
            name: 'Scheduler DWH',
            path: 'scheduler',
            items: [
                { name: 'Log de Procesos', path: 'log' },
                { name: 'Ejecución Manual', path: 'execution' },
            ]
        }, {
            name: 'SOX 2.0',
            path: 'sox-2',
            items: [
                { name: 'Reporte Matriz de Usuarios y Perfiles', path: 'uam' }
            ]
        }, {
            name: 'SOX 1.0',
            path: 'sox',
            items: [
                { name: 'Usuarios Altas/Bajas P29-SC16/SC18', path: 'p29-sc16' },
                { name: 'Reporte de Falla DWH SC-41', path: 'sc-41' },
                { name: 'Reporte P29 - Baja por Inactividad', path: 'report-p29' },
            ]
        }, {
            name: 'Biométrica', path: 'biometric'
        }]
    }, {
        name: 'Reportes',
        path: 'reports',
        icon: 'description',
        submenus: [{
            name: 'Reportes Corporativos',
            path: 'b2b-reports',
            items: [
                { name: 'Análisis Corporativo', path: 'analysis' },
                { name: 'Ingreso RMT', path: 'rmt' },
                { name: 'Nota Crédito', path: 'credit-note' },
                { name: 'Reporte Facturación Mensual', path: 'monthly-billing' },
            ]
        }, {
            name: 'Reportes Varios',
            path: 'misc-reports',
            items: [
                { name: 'Verificación de Voucher Cargados', path: 'voucher' },
                { name: 'Biométrica DWH', path: 'biometrics' },
                { name: 'Reporte AS400 y Navega+', path: 'as400-navega' },
                { name: 'Broadcast Generator', path: 'broadcast' },
                { name: 'Permisos Broadcast', path: 'broadcast-access' },
            ]
        }, {
            name: 'Motivos de Ganancias Netas', path: 'net-profits'
        }, {
            name: 'Cobros Proveedores', path: 'providers'
        }, {
            name: 'Acreditaciones Masivas',
            path: 'accreditations',
            items: [
                { name: 'Account Code Híbridos', path: 'account-code' }
            ]
        }]
    }, {
        name: 'Mantenimientos',
        path: 'maintenance',
        icon: 'source',
        submenus: [{
            name: 'Budget & Forecast',
            path: 'budget-forecast',
            items: [
                { name: 'Churn', path: 'churn' },
                { name: 'Forecast Adjustments', path: 'adjustment' },
                { name: 'Forecast Holidays Administration', path: 'holidays' },
                { name: 'Metas Financieras', path: 'goals' },
                { name: 'Plan Katracho', path: 'katracho' },
            ]
        }, {
            name: 'Catálogo de KPIs',
            path: 'kpi',
            items: [
                { name: 'Asignación de KPIs', path: 'assignment' },
                { name: 'Evaluación de KPIs', path: 'evaluation' },
                { name: 'Factory - Ingresos de KPIs', path: 'income-factory' },
                { name: 'KPIs Tigo Money', path: 'kpi-mfs' },
            ]
        }]
    }, {
        name: 'DWHEVO',
        path: 'evo',
        icon: 'developer_board',
        submenus: [
            {
                name: 'Ejecuciones',
                path: 'executions',
                items: [
                    { name: 'Bitácora de Ejecución', path: 'logs' },
                    { name: 'Ejecuciones Manuales', path: 'manuals' },
                    { name: 'Ejecuciones en Cola', path: 'queued' },
                    { name: 'Ejecuciones Pendientes', path: 'pendings' },
                    { name: 'Ejecuciones Sobre Tiempo', path: 'overtime' },
                    { name: 'Gráfico de Ejecuciones', path: 'graph' },
                    { name: 'Monitoreo de Ejecuciones', path: 'monitoring' },
                ]
            }, {
                name: 'Elementos',
                path: 'elements',
                items: [
                    { name: 'Grafo', icon: 'device_hub', path: 'graph' },
                    { name: 'Programas', icon: 'settings', path: 'program' },
                    { name: 'Tablas', icon: 'wysiwyg', path: 'table' },
                    { name: 'Vistas', icon: 'table_view', path: 'view' },
                    { name: 'Reportes', icon: 'assessment', path: 'report' },
                    { name: 'Semáforos', icon: 'offline_bolt', path: 'semaphore' },
                    { name: 'Esquemas', icon: 'source', path: 'schema' },
                ]
            }, {
                name: 'Configuración EVO',
                path: 'configurations',
                items: [
                    { name: 'Parámetros Calendarizador', path: 'parameters' },
                    { name: 'Colas de Ejecución', path: 'queues' },
                    { name: 'Colas de Ejecución - Programas', path: 'programs-queues' },
                    { name: 'Imágenes Elementos de Software', path: 'images' },
                    { name: 'Configuración de Extracciones SFTP', path: 'sftp' },
                ]
            }
        ]
    }, {
        name: 'Metadata',
        path: 'metadata',
        icon: 'list_alt',
        submenus: [{
            name: 'Clasificaciones',
            path: 'cl',
            items: [
                { name: 'Mantenimientos Clasificaciones', path: 'maintenance' },
                { name: 'Creación de Esquemas', path: 'schema' },
                { name: 'Mantenimientos de Esquemas', path: 'schema-maintenance' },
            ]
        }, {
            name: 'Dispositivos Electrónicos',
            path: 'devices',
            items: [
                { name: 'Aplicación', path: 'application' },
                { name: 'Servidor', path: 'server' },
                { name: 'Interfaz', path: 'interface' },
                { name: 'Plataformas', path: 'platform' },
            ]
        }, {
            name: 'Otros',
            path: 'others',
            items: [
                { name: 'Mantenimiento Sistema Fuente', path: 'src-stm-maintenance' },
                { name: 'Base de Datos Sistema Fuente', path: 'src-stm' },
                { name: 'Manteimiento Periodo', path: 'period-maintenance' },
                { name: 'Procesos', path: 'process' },
            ]
        }]
    }];

    constructor() { }
}
