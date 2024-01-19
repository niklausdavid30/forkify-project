import View from './view.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(result => previewView.render(result, false))
      .join('');
  }

}

export default new ResultsView();
