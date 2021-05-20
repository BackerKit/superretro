class CommentsController < ApplicationController
  def create
    card = Comment.create(comment_params)
    render json: card.to_json
  end

  def update
    card = Comment.find_by(params[:id])
    card.update(comment_params)
    render json: card.to_json
  end

  private

  def comment_params
    params.require(:comment).permit(:card_id, :detail)
  end
end