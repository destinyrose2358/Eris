class Api::MessagesController < ApplicationController

  def index
    channel = Channel
      .where(id: params[:channel_id]).first
    if channel && (channel.restricted_members.include?(current_user) || channel.restrictions.empty?)
      @messages = channel.messages
      processed_messeages = ApplicationController.renderer.render("api/messages/index", locals: { "@messages": @messages })
      UsersChannel.broadcast_to current_user, processed_messeages
      render json: {}, status: :ok
    else
      UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MESSAGE_ERRORS", errors: ["Nothing to see here"] })
      render json: {}, status: 404
    end
  end

  def create
    @type = "RECEIVE_MESSAGE"
    channel = Channel
      .where(id: params[:channel_id]).first
    if channel && (channel.restricted_members.include?(current_user) || channel.restrictions.empty?)
      @message = channel.messages.new(message_params)
      @message.author = current_user
      if @message.save
        processed_message = ApplicationController.renderer.render("api/messages/show", locals: { "@message": @message, "@type": @type })
        ChannelsChannel.broadcast_to channel, processed_message
        render json: {}, status: :ok
      else
        UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MESSAGE_ERRORS", errors: @message.errors.full_messages })
        render json: {}, status: :unprocessable_entity
      end
    else
      UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MESSAGE_ERRORS", errors: ["Nothing to see here"] })
      render json: {}, status: 404
    end
  end

  def update
    @type = "RECEIVE_MESSAGE"
    @message = current_user.messages.includes(:channel).find_by(id: params[:id])
    if @message
      if @message.update(message_params)
        processed_message = ApplicationController.renderer.render("api/messages/show", locals: { "@message": @message, "@type": @type })
        ChannelsChannel.broadcast_to @message.channel, processed_message
        render json: {}, status: :ok
      else
        UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MESSAGE_ERRORS", errors: @message.errors.full_messages })
        render json: {}, status: :unprocessable_entity
      end
    else
      UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MESSAGE_ERRORS", errors: ["Message not found"] })
      render json: {}, status: 404
    end
  end

  def destroy
    @type = "REMOVE_MESSAGE"
    @message = current_user.messages.includes(:channel).find_by(id: params[:id])
    if @message && @message.delete
      processed_message = ApplicationController.renderer.render("api/messages/show", locals: { "@message": @message, "@type": @type })
      ChannelsChannel.broadcast_to @message.channel, processed_message
      render json: {}, status: :ok
    else
      UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MESSAGE_ERRORS", errors: ["Message not found"] })
      render json: {}, status: 404
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end

end
