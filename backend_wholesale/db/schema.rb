# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_01_222438) do

  create_table "appointments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "user_id", default: ""
    t.string "date"
    t.string "beginning_time"
    t.string "end_time"
    t.string "nurse_id"
    t.string "notes", default: ""
    t.string "status", default: "Open"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "categories", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "category_type", default: "Patient"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "drugs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "orders", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "user_id"
    t.string "plan_id"
    t.string "status", default: "Pending"
    t.string "date_charged"
    t.string "order_date"
    t.string "shipping_address1", default: ""
    t.string "shipping_address2", default: ""
    t.string "shipping_city", default: ""
    t.string "shipping_state", default: ""
    t.string "shipping_zip_code", default: ""
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "plans", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "treatment"
    t.string "drug_name"
    t.string "dosage"
    t.string "frequency"
    t.string "treatment_type"
    t.integer "cost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "surveys", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "user_id"
    t.string "answer1_ed", default: ""
    t.string "answer2_hd", default: ""
    t.string "answer3_prescription", default: ""
    t.string "answer3_prescription_list", default: ""
    t.string "answer4_vitamins", default: ""
    t.string "answer5_allergies", default: ""
    t.string "answer6_intercourse", default: ""
    t.string "answer7_surgeries", default: ""
    t.string "answer8_medicationsbox", default: ""
    t.string "answer9_lbp", default: ""
    t.string "answer10_hbp", default: ""
    t.string "answer11_abnormalheart", default: ""
    t.string "answer12_chestpain", default: ""
    t.string "answer13_fainting", default: ""
    t.string "answer14_blurry", default: ""
    t.string "answer15_doctor", default: ""
    t.string "answer16_addtinfo", default: ""
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "stripe_id"
    t.string "category_id"
    t.string "email"
    t.string "password_digest"
    t.string "status", default: "Pending"
    t.string "state"
    t.string "gender", default: ""
    t.string "dob", default: ""
    t.string "phone_number", default: ""
    t.string "allow_text", default: ""
    t.string "employment", default: ""
    t.string "marital_status", default: ""
    t.string "race", default: ""
    t.string "height", default: ""
    t.string "weight", default: ""
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
