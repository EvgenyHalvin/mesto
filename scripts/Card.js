class Card {
    constructor(dataCard, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = dataCard.name;
        this._link = dataCard.link;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _handleOpenPopup() {
        
    }

    _handleClosePopup() {

    }
}