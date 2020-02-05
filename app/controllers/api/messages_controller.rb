class Api::MessagesController < ApplicationController

  def index
    channel = Channel
      .where(id: params[:channel_id]).first
    if channel && (channel.restricted_members.include?(current_user) || channel.restrictions.empty?)
      @messages = channel.messages
      render :index
    else
      render json: ["Nothing to see here"], status: 404
    end
  end

  def create
    channel = current_user
      .channels
      .where(id: params[:channel_id]).first
    if channel && (channel.restricted_members.include?(current_user) || channel.restrictions.empty?)
      @message = channel.messages.new(message_params)
      @message.author = current_user
      if @message.save
        render :show
      else
        render json: @message.errors.full_messages, status: :unprocessable_entity
      end
    else
      render json: ["Nothing to see here"], status: 404
    end
  end

  def update
    @message = current_user.messages.find_by(id: params[:id])
    if @message
      if @message.update(message_params)
        render :show
      else
        render json: @message.errors.full_messages, status: :unprocessable_entity
      end
    else
      render json: ["Message not found"], status: 404
    end
  end

  def destroy
    @message = current_user.messages.find_by(id: params[:id])
    if @message
      @message.delete
      render :show
    else
      render json: ["Message not found"], status: 404
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end

end
