class CardsController < ApplicationController
  def create
    card = Card.create(card_params)
    render json: card.to_json
  end

  def index
    Card.find_or_create_by!(description: 'I am card 1', votes: 10)
    Card.find_or_create_by!(description: 'I am card 2', votes: 5)
    Card.find_or_create_by!(description: 'I am card 3', votes: 0)
    Card.find_or_create_by!(description: 'I am card 4', votes: -5)
    render json: Card.all#.map(&:to_json)
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
