import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() lista: any[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number | null = null;
  @Input() itemsPerPage: number = 6;

  @Output() pageChanged = new EventEmitter<number>();

  getPaginatedList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.lista.slice(startIndex, endIndex);
  }

  onPageChanged(page: number) {
    this.pageChanged.emit(page);
  }

  getNumberOfPages(): number[] {
    if (this.totalPages !== null) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    } else {
      const numberOfPages = Math.ceil(this.lista.length / this.itemsPerPage);
      return Array.from({ length: numberOfPages }, (_, i) => i + 1);
    }
  }

  ngOnInit(): void {
    if (this.totalPages === null) {
      this.totalPages = Math.ceil(this.lista.length / this.itemsPerPage);
    }
  }
}
