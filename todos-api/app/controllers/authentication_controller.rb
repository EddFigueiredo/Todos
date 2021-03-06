class AuthenticationController < ApplicationController
    skip_before_action :authorize_request, only: :authenticate

    def authenticate
        auth_token = AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
        json_response(auth_token: auth_token, user: user)
    end

    private

    def auth_params
        params.permit(:email, :password)
    end

    def user
        user = User.find_by(email: auth_params[:email])
        return { id: user.id, name: user.name, email: user.email } if user && user.authenticate(auth_params[:password])
    end
end
