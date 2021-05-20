class CardsController < ApplicationController
  def create
    card = Card.create(card_params)
    render json: card.to_json
  end

  def index
    render json: Card.all.map(&:to_json)
  end

  def update
    card = Card.find_by(params[:id])
    card.update(card_params)
    render json: card.to_json
  end

  private

  def card_params
    params.require(:card).permit(:description, :votes)
  end
end