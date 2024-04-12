import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  includeLetters = false
  includeNumbers = false
  includeSymbols = false
  password = ''

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  onButtonClick() {
    console.log('Letters: ', this.includeLetters)
    console.log('Numbers: ', this.includeNumbers)
    console.log('Symbols: ', this.includeSymbols)
    this.password = 'Password'
  }
}
