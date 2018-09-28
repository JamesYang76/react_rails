class PostPolicy < ApplicationPolicy

  def create?
    true
  end

  def update?
    true
  end

  def edit?
    true
  end

  def new?
    true
  end

  def destroy?
    true
  end


  def show?
    true
  end

  class Scope < Scope
    def resolve
      scope
    end
  end

end