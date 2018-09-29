module Api
  module V1
    class FruitsController < ApiController
      #protect_from_forgery with: :null_session

      def index
        render json: Fruit.all
      end

      def create
        Rails.logger.debug "FruitsController create"
        fruit = Fruit.create(fruit_params)
        render json: fruit, status: :created
      end

      def destroy
        Fruit.destroy(params[:id])
      end

      def update
        fruit = Fruit.find(params[:id])
        fruit.update_attributes(fruit_params)
        render json: fruit
      end

      private

      def fruit_params
        params.require(:fruit).permit(:id, :name, :description)
      end
    end
  end
end