const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Add a new service
router.post('/', async (req, res) => {
    try {
        const { name, description, price } = req.body;
        if (!name || !price) {
            return res.status(400).json({ msg: 'Service name and price are required' });
        }
        const newService = new Service({ name, description, price });
        await newService.save();
        res.json(newService);
     
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a service
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;
        const updatedService = await Service.findByIdAndUpdate(id, { name, description, price }, { new: true });
        if (!updatedService) {
            return res.status(404).json({ msg: 'Service not found' });
        }
        res.json(updatedService);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a service
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedService = await Service.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ msg: 'Service not found' });
        }
        res.json({ msg: 'Service deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
