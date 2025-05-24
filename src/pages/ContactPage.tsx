import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.company || !formData.message) {
        throw new Error('Please fill in all fields');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const { error: submitError } = await supabase
        .from('form_submissions')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          company: formData.company.trim(),
          message: formData.message.trim()
        });

      if (submitError) {
        throw new Error(submitError.message || 'Failed to submit form. Please try again.');
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity
      }
      }
  )
}