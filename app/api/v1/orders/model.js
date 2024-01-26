const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema({
  ticketCategories: {
    type: {
      type: String,
      required: [true, "Tipe tiket harus diisi"],
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  sumTicket: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    personalDetail: {
      firstName: {
        type: String,
        required: [true, "Please provide firstName"],
        minLength: 3,
        maxLength: 50,
      },
      lastName: {
        type: String,
        required: [true, "Please provide lastName"],
        minLength: 3,
        maxLength: 50,
      },
      email: {
        type: String,
        required: [true, "Please provide email"],
      },
      role: {
        type: String,
        default: "Designer",
      },
    },
    status: {
      type: String,
      name: ["pending", "pending"],
      default: "pending",
    },
    totalPay: {
      type: Number,
      required: true,
    },
    totalOrderTicket: {
      type: Number,
      required: true,
    },
    orderItems: [orderDetailSchema],
    participant: {
      type: mongoose.Types.ObjectId,
      ref: "Participant",
      required: true,
    },
    payment: {
      type: mongoose.Types.ObjectId,
      ref: "Payment",
      required: true,
    },
    event: {
      type: mongoose.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    historyEvent: {
      title: {
        type: String,
        required: [true, "Judul harus diisi"],
        minLength: 3,
        maxLength: 50,
      },
      date: {
        type: Date,
        required: [true, "Tanggal dan waktu harus diisi"],
      },
      about: {
        type: String,
      },
      tagline: {
        type: String,
        required: [true, "Tagline harus diisi"],
      },
      keyPoint: {
        type: [String],
      },
      venueName: {
        type: String,
        required: [true, "Tempat acara harus diisi"],
      },
      image: {
        type: mongoose.Types.ObjectId,
        ref: "Image",
        required: true,
      },
      category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true,
      },
      organizer: {
        type: mongoose.Types.ObjectId,
        ref: "Organizer",
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);