import {
    Component,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    MatPaginator,
    MatTableDataSource
} from '@angular/material';
import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

@Component({
    selector: 'foo-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({
                height: '0px',
                minHeight: '0'
            })),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})
export class GridComponent implements OnInit {
    constructor() {}
    _listFromComponent : PeriodicElement[] = null;
    columnsToDisplay = [
        'name',
        'weight',
        'symbol',
        'position'
    ];
    expandedElement: PeriodicElement | null;
    dataSource = null;
    // dataList: PeriodicElement[] = this._listFromComponent !== null ? this._listFromComponent : null;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
      this.checkList();
    }

    prepareList = () => {
        this.dataSource = new MatTableDataSource<PeriodicElement>(this._listFromComponent);
        this.dataSource.paginator = this.paginator;
    };

    checkList = () => {
        if (this._listFromComponent === null) {
            alert('Il componente griglia si aspetta un array di oggetti [{},{}...n]');
            return;
        } else {
            this.prepareList();
        }
    };

    @Input() set elList(elList: any)
    {
        this._listFromComponent = elList;
    }
    get elList()
    {
        return this._listFromComponent;
    }
}

export interface PeriodicElement
{
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
}
