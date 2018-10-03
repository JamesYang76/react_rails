module Api
  module V1
    class FruitsController < ApiController
      #protect_from_forgery with: :null_session

      def index
        fruit = policy_scope(Fruit.all)
        authorize fruit
        render json: fruit
      end

      def create
        Rails.logger.debug "FruitsController create"
        fruit = Fruit.create(fruit_params)
        authorize fruit
        render json: fruit, status: :created
      end

      def destroy
        fruit = Fruit.find(params[:id])
        authorize fruit
        Fruit.destroy(params[:id])
        head :no_content
      end

      def update
        fruit = Fruit.find(params[:id])
        authorize fruit
        if (fruit.update_attributes(fruit_params))
          render json: fruit
        else
          render json: fruit.errors, status: :unprocessable_entity
        end
      end

      private

      def fruit_params
        params.require(:fruit).permit(:id, :name, :description)
      end
    end
  end
end