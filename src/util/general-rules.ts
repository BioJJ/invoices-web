export function rules() {
  return {
    required: (value: any) => !!value || 'Required.',

    min1chars: (value: any) => {
      if (value != null) {
        return value.trim().length >= 1 || 'Min 1 character';
      }
      return false;
    },

    min5chars: (value: any) => {
      if (value != null) {
        return value.trim().length >= 5 || 'Min 5 characters';
      }
      return false;
    },

    max255chars: (value: any) => {
      if (value != null) {
        return value.length <= 255 || 'Max 255 characters';
      }
      return false;
    },
  };
}
