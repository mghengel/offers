class CustomController < ApplicationController
  def heartbeat
    render inline: "Some string to the client/user"
  end
end