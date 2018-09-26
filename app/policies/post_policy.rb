class PostPolicy < ApplicationPolicy
  def update?
    user.admin? or not record.published?
  end


  def show?
    false
  end

  class Scope < Scope
    def resolve
      #if user.admin?
        scope.all
      #else
        #scope.where(published: true)
     # end
    end
  end

end