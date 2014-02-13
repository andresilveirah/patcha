module ApplicationHelper
  def submit_text(model)
    if model.respond_to?(:new_record?) && model.new_record?
      t('helpers.submit.create', model: model.class.model_name.human)
    else
      t('helpers.submit.submit', model: model.class.model_name.human)
    end
  end
end
