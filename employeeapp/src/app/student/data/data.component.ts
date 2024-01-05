import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  
data = 'Click Add button to See';

  items=[
    'Item1',
    'item2',
    'item3',
    'item4',
    'item5'
]
onreceived(ev:any)
{
  console.log(ev);
  this.data = ev;
}


}
