import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { FormsModule } from '@angular/forms';
// import { TabViewModule } from 'primeng/tabview';
@Component({
  selector: 'masTi-crete-modal',
  imports: [CommonModule, TabsModule, ButtonModule, DrawerModule, FormsModule],
  templateUrl: './crete-modal.component.html',
  styleUrl: './crete-modal.component.scss',
  standalone: true
})
export class CreteModalComponent {
  @Input({ required: true }) visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  onDrawerClose(value: boolean) {
    this.visible = value;
    this.visibleChange.emit(this.visible);  // Emit the change
  }
}
