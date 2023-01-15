export abstract class DateUtils {

    /**
     * Returns date as a string
     */
    public static formatDate = (date: Date): string => {
        return new Date(date).toLocaleTimeString([], {          
                hour: '2-digit',
                minute:'2-digit'
            }
        );
    }
    
}